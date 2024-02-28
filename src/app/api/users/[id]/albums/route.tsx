import { db } from "@/db";
import { users, usersToAlbums } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const albums = await db
        .select()
        .from(usersToAlbums)
        .where(eq(usersToAlbums.userId, params.id));
    if (!albums) {
        return NextResponse.json({ albums: null });
    }
    return NextResponse.json({ albums: albums });
}
