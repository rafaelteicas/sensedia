"use client";

import React, { FormEvent } from "react";
import { Input, Button } from "@/components";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useToast } from "@/service";

export function FormLogin() {
    const { setToast } = useToast();
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const request = await signIn("credentials", {
            email: email,
            callbackUrl: "/user",
            redirect: false,
        });
        if (request?.error) {
            setToast({
                icon: "error",
                message: "Credenciais inválidas",
            });
        } else {
            await signIn("credentials", {
                email: email,
                callbackUrl: "/user",
            });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="gap-8 grid">
                <Input
                    required
                    id="email"
                    type="email"
                    name="email"
                    label="E-mail"
                />
                <Input
                    required
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                />
            </div>
            <div className="flex items-center gap-4 pt-8">
                <Button type="submit" preset="primary">
                    Entrar
                </Button>
                <Button type="button" preset="ghost">
                    <Link href={"/auth/new"}>Criar conta</Link>
                </Button>
            </div>
        </form>
    );
}
