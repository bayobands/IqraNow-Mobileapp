// app/api/donate/route.ts
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount, recurring } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: recurring ? "subscription" : "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
            },
            unit_amount: Math.round(amount * 100), // cents
            recurring: recurring ? { interval: "month" } : undefined,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/donate/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/donate/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe Error", err);
    return new NextResponse("Failed to create session", { status: 500 });
  }
}
