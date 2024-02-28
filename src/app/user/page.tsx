import React from "react";
import { Table } from "@/components";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function User() {
    const session = await auth();

    if (!session) {
        redirect("/auth");
    }

    return <Table session={session?.user?.email!} />;
}
