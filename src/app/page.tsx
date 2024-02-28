import React from "react";
import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import { getSession, useSession } from "next-auth/react";

export default async function Page() {
    const session = await auth();

    if (session) {
        redirect("/user");
    } else {
        redirect("/auth");
    }
    return <div></div>;
}
