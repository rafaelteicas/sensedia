import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/connect";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { randomBytes, randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    unstable_update,
} = NextAuth({
    adapter: DrizzleAdapter(db),
    session: {
        strategy: "jwt",
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
    secret: process.env.SECRET,
    providers: [
        Credentials({
            credentials: { email: {} },
            async authorize(credentials) {
                const query = await db
                    .select({
                        name: users.name,
                        email: users.email,
                    })
                    .from(users)
                    .where(eq(users.email, credentials!.email as string));

                if (query[0])
                    return {
                        email: query[0].email,
                        name: query[0].name,
                        id: "",
                    };
                else return null;
            },
        }),
    ],
});
