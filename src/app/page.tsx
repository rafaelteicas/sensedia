import React from "react";
import { auth } from "./api/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();

    if (session) {
        redirect("/user");
    } else {
        redirect("/auth");
    }
    return <div></div>;
}
