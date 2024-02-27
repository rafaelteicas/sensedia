import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/connect.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString:
            process.env.POSTGRES_URL || (process.env.DB_URL as string),
    },
    verbose: true,
});
