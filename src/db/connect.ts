// import { drizzle as drizzlejs } from "drizzle-orm/postgres-js";
// import postgress from "postgres";

// const connection = postgress(process.env.POSTGRES_URL! || process.env.DB_URL!);
// export const db = drizzle(connection, { schema });

import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { createPool } from "@vercel/postgres";

const connection = createPool({
    connectionString: process.env.POSTGRES_URL! || process.env.DB_URL!,
});

export const db = drizzle(connection, { schema });
