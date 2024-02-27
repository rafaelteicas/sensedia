import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { createPool } from "@vercel/postgres";

const pool = createPool({
    connectionString: process.env.POSTGRES_URL! || process.env.DB_URL!,
});

export const db = drizzle(pool, { schema });
