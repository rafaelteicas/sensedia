import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/connect-env";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    adapter: DrizzleAdapter(db),
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60,
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
    secret: [process.env.SECRET, process.env.NEXTAUTH_SECRET] as string[],
    providers: [
        Credentials({
            credentials: { email: {}, password: {} },
            async authorize(credentials) {
                const query = await db
                    .select()
                    .from(users)
                    .where(eq(users.email, credentials!.email as string));

                if (query[0])
                    return {
                        id: query[0].id,
                        name: query[0].name,
                        email: query[0].email,
                        image: query[0].id,
                    };
                else return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth",
        error: "/auth",
    },
});
