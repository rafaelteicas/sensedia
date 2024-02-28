import { db } from "@/db/connect-env";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { name, username, email, city, days } = data;

    //@ts-ignore
    await db.insert(users).values({
        name,
        username,
        email,
        city,
        days,
        password: "Senha123",
        created_at: new Date(),
        updated_at: new Date(),
    });

    return NextResponse.json(data);
}
