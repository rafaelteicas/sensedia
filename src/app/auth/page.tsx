import { Banner } from "@/components";
import React from "react";
import { FormLogin } from "./components/form-login";
import { auth } from "../api/auth";
import { redirect } from "next/navigation";

export default async function Auth() {
    const session = await auth();
    if (session) {
        redirect("/user");
    }
    return (
        <>
            <Banner />
            <div className="flex flex-1 flex-col justify-center">
                <div className="border rounded-[10px] h-full  p-10">
                    <p className="text-sm font-medium text-gray-650 pb-8">
                        LOGIN
                    </p>
                    <FormLogin />
                </div>
            </div>
        </>
    );
}
