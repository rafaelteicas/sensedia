import { db } from "@/db/connect";
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
    });

    return NextResponse.json(data);
}
