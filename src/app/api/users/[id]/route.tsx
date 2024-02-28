import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.email, params.id),
    });
    return NextResponse.json({ user: user });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    await db.delete(users).where(eq(users.id, params.id));
    return NextResponse.json({}, { status: 200 });
}
