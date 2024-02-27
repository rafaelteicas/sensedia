import * as schema from "./schema";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createPool } from "@vercel/postgres";

const connection = createPool({
    connectionString: process.env.POSTGRES_URL!,
});

export const db = drizzle(connection, { schema });
