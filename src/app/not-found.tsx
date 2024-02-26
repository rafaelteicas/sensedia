import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <p className="text-8xl font-bold">404</p>
            <p className="font-semibold">Página não encontrada!</p>
            <p>
                Ops, a página que você está procurando não existe, para voltar a
                página inicial{" "}
                <span className="text-blue-500 cursor-pointer font-medium">
                    clique aqui
                </span>
            </p>
        </div>
    );
}
