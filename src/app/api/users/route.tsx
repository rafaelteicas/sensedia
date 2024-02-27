import { db } from "@/db";
import { albums, posts, users } from "@/db/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await db.execute(
        sql`select u.id, u.username, u.name, u.email, u.city, u.days, COUNT(p.id) AS Posts, COUNT(a.user_id) AS Albums, u.created_at, u.updated_at from ${users} u 
        full outer join ${posts} p on u.id = p.user_id 
        full outer join ${albums} a on a.user_id = u.id
        group by u.id`
    );
    return NextResponse.json({ users: response.rows });
}
