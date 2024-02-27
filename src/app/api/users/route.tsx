import { db } from "@/db/connect";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await db.query.users.findMany();
    const users = response.map(({ password, ...rest }) => rest);
    return NextResponse.json(users);
}
