import "dotenv/config";
import type { Config } from "drizzle-kit";


export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql", //Original said "driver pg" not "pglite"
    dbCredentials : {
        url: process.env.DATABASE_URL!, //Original said connectionString not url
    },
} satisfies Config;

