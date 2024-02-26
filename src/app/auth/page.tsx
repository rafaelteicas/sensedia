import React from "react";
import { Banner } from "@/components";
import { FormLogin } from "./components/form-login";

export default async function Auth() {
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
