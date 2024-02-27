import React from "react";
import { FormRegister } from "./components/form-register";

export default async function Register() {
    return (
        <>
            <h1 className="text-2xl bold my-8">Registro</h1>
            <div className="w-full border rounded-[10px] h-full flex flex-col p-10">
                <p className="text-sm font-medium text-gray-650 pb-8">
                    REGISTRO
                </p>
                <FormRegister />
            </div>
        </>
    );
}
