import { Success, Error } from "@/assets";
import { useToast, useToastZustand } from "@/service";
import React from "react";

export function Toast() {
    const toast = useToastZustand();
    const { hideToast } = useToast();

    if (!toast) return;
    setTimeout(() => hideToast(), 2000);
    return (
        <div className="fixed rounded bg-white px-4 py-2 right-4 bottom-4 shadow-xl border flex flex-col">
            {toast.icon === "success" ? (
                <div className="flex flex-1 flex-row gap-4">
                    <Success className="fill-emerald-500 w-6 " />
                    <div className="flex flex-col">
                        <p className="font-bold">Sucesso</p>
                        {toast?.message}
                    </div>
                </div>
            ) : (
                <div className="flex flex-1 flex-row gap-4">
                    <Error className="fill-rose-500 w-6 " />
                    <div className="flex flex-col">
                        <p className="font-bold">Erro</p>
                        {toast?.message}
                    </div>
                </div>
            )}
        </div>
    );
}
