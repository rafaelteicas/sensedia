import * as schema from "./schema";
import { drizzle as drizzlejs } from "drizzle-orm/postgres-js";
import postgress from "postgres";

const connection = postgress(process.env.DB_URL!);
export const db = drizzlejs(connection, { schema });


