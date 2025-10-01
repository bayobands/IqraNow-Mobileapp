import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";
import { userSubscription } from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

   

    // Create a fake user subscription
    await db.insert(userSubscription).values({
      userId: "user_2wWnYhw52DiqLe7RsLakPTF56Wq", // 👈 replace with actual userId
      stripeCustomerId: "cus_SdxtJCt0y5SXNd subscribed to price_1RifxNDZCnMVQ1bLoJhDA3RB", // 👈 fake or real Stripe customer ID
      stripeSubscriptionId: "sub_1RifxVDZCnMVQ1bLo0nGaltV", // 👈 fake or real sub ID
      stripePriceId: "price_1RifxNDZCnMVQ1bLoJhDA3RB", // 👈 the Stripe price ID for the plan
      stripeCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 days
      isActive: true,
    });

    console.log("✅ Seeded user subscription");
  } catch (error) {
    console.error("❌ Failed to seed database", error);
    throw error;
  }
};

main();
