import { db } from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const post = await db
        .select()
        .from(posts)
        .where(eq(posts.user_id, params.id));

    if (!post) {
        return NextResponse.json({ posts: null });
    }
    return NextResponse.json({ posts: post });
}
