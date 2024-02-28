import { db } from "@/db/connect-dev";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { name, username, email, city, days } = data;

    if (!name || !username || !email || !city || !days) {
        return NextResponse.json(
            { message: "Não foi possível cadastrar o usuário" },
            { status: 400 }
        );
    }

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
