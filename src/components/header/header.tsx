"use client";

import React, { useState } from "react";

import { Arrow, Help, Apps, Icon, Logo } from "@/assets";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
    const path = usePathname();
    const breadcrumbs = path.split("/").filter((value) => value !== "");
    const { push } = useRouter();
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <div className="w-full h-20 bg-gray-850 text-white flex flex-1 items-center gap-2 pl-8">
                <Icon />
                <div>
                    <Logo />
                    <p className="text-xs">Treinador De Futebol</p>
                </div>
            </div>
            <div className="w-full h-16 sticky top-0 bg-white border-b flex flex-1 items-center pr-8 pl-8 gap-4 z-10">
                <div className="flex flex-1 gap-2">
                    <button
                        onClick={() => push("/")}
                        className="flex items-center gap-2"
                    >
                        <Icon color="#8556AA" />
                        <p className="text-purple-950 font-bold uppercase text-sm">
                            Bem vindo
                        </p>
                    </button>
                    {breadcrumbs.map((breadcrumb) => (
                        <div
                            key={breadcrumb}
                            className="flex items-center gap-2"
                        >
                            <Arrow width={16} height={10} />
                            <p
                                className="text-gray75 cursor-pointer"
                                onClick={() => push(`/${breadcrumb}`)}
                            >
                                {breadcrumb}
                            </p>
                        </div>
                    ))}
                </div>
                <Help />
                <Apps />
                <button
                    className="flex items-center gap-2 border-l"
                    onClick={() => setDropdown((cur) => !cur)}
                >
                    <div className="bg-purple-950 rounded-full w-10 h-10 items-center flex justify-center ml-4">
                        <p className="text-sm text-white">UN</p>
                    </div>
                    <p className="text-sm text-gray75">Nome de usuário</p>
                </button>
            </div>
            {dropdown && (
                <div className="fixed right-2 text-gray-50 bg-gray-850 flex flex-col gap-4 p-4">
                    <p>Lista de amigos</p>
                    <p>Amigos salvos</p>
                    <p>Notificações</p>
                    <p>Preferências</p>
                    <p>Fechar sessão</p>
                </div>
            )}
        </>
    );
}
