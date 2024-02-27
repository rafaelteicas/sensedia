import React from "react";
import { FormRegister, HelpRegister } from "@/components";

export default function Register() {
    return (
        <>
            <h1 className="text-2xl bold my-8">Registro</h1>
            <HelpRegister />
            <div className="w-full border rounded-[10px] h-full flex flex-col p-10">
                <p className="text-sm font-medium text-gray-650 pb-8">
                    REGISTRO
                </p>
                <FormRegister />
            </div>
        </>
    );
}
