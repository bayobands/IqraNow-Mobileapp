import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.text();
  const rawHeaders = await headers();
const signature = rawHeaders.get("Stripe-Signature") as string;


  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error("❌ Stripe Webhook Signature Error:", error.message);
    return new NextResponse(`Webhook error: ${error.message}`, { status: 400 });
  }

  // ✅ Handle new subscription
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session?.metadata?.userId;
    const subscriptionId = session.subscription;

    if (!userId || !subscriptionId || typeof subscriptionId !== "string") {
      console.error("❌ Missing userId or subscriptionId");
      return new NextResponse("Missing user ID or subscription ID", { status: 400 });
    }

    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ["items.data.price"],
      });


     

      const values = {
        userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(),
        isActive: true,
      };

      const existing = await db.query.userSubscription.findFirst({
        where: eq(userSubscription.userId, userId),
      });

      if (existing) {
        await db
          .update(userSubscription)
          .set(values)
          .where(eq(userSubscription.userId, userId));
      } else {
        await db.insert(userSubscription).values(values);
      }

      console.log("✅ Subscription saved for user:", userId);
    } catch (error) {
      console.error("🔥 Error saving subscription:", error);
      return new NextResponse("Subscription saving failed", { status: 500 });
    }
  }

  return new NextResponse(null, { status: 200 });
}
