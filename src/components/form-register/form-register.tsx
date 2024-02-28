"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components";
import { useForm } from "react-hook-form";
import {
    RegisterSchema,
    registerDays,
    registerSchema,
} from "./register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/service";
import { useQueryClient } from "@tanstack/react-query";
import { useRegisterUser } from "@/domain";
import { Checkbox, FormControlLabel } from "@mui/material";
import { signIn } from "next-auth/react";

export const fields: { id: keyof RegisterSchema; label: string }[] = [
    { id: "username", label: "Nome de usuário" },
    { id: "name", label: "Nome completo" },
    { id: "email", label: "E-mail" },
    { id: "city", label: "Cidade" },
];

export function FormRegister() {
    const [checkedLabel, setCheckedLabel] = useState<string[]>([]);
    const { setToast } = useToast();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue, reset, getValues, formState } =
        useForm<RegisterSchema>({
            resolver: zodResolver(registerSchema),
            mode: "onChange",
        });

    function handleCheckedLabel(e: React.ChangeEvent<HTMLInputElement>) {
        let value: string[];
        if (e.target.checked) {
            value = [...checkedLabel, e.target.value];
            setCheckedLabel(value);
        } else {
            value = checkedLabel.filter((label) => label !== e.target.value);
            setCheckedLabel(value);
        }
        setValue("days", value as any);
    }

    function resetFn() {
        setCheckedLabel([]);
        reset();
    }

    const { registerUser, isPending } = useRegisterUser({
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "getAllUsers",
                    "getPostsByUserId",
                    "getAlbumsByUserId",
                ],
            });
            setToast({
                icon: "success",
                message: "Usuário cadastrado com sucesso!",
            });

            await signIn("credentials", {
                email: getValues("email"),
                callbackUrl: "/user",
            });
        },
        onError: () => {
            setToast({
                icon: "error",
                message: "Não foi possível cadastrar o usuário!",
            });
        },
    });

    function sendForm(data: RegisterSchema) {
        registerUser(data);
    }

    return (
        <form onSubmit={handleSubmit(sendForm)}>
            <div className="grid grid-flow-col-dense gap-4 grid-cols-2 grid-rows-3">
                {fields.map((field, index) => (
                    <>
                        <Input
                            key={field.id}
                            required
                            id={field.id}
                            label={field.label}
                            InputProps={{ ...register(field.id) }}
                            className={
                                index < 3
                                    ? "col-start-1 row-span-1"
                                    : "col-start-2 row-span-full"
                            }
                        />
                    </>
                ))}
                <div className="col-start-2 row-start-2 row-span-full">
                    <p className="text-sm font-medium text-gray-650 py-2">
                        DIAS DA SEMANA
                    </p>
                    <div className="grid grid-cols-3">
                        {registerDays.map((day) => (
                            <FormControlLabel
                                key={day}
                                {...register("days")}
                                label={day}
                                control={
                                    <Checkbox
                                        checked={checkedLabel.includes(day)}
                                        value={day}
                                        onChange={handleCheckedLabel}
                                    />
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 pt-8">
                <Button
                    type="submit"
                    preset="primary"
                    disabled={
                        !formState.isValid ||
                        formState.isSubmitting ||
                        isPending
                    }
                >
                    REGISTRAR
                </Button>
                <Button type="button" preset="ghost" onClick={resetFn}>
                    CANCELAR
                </Button>
            </div>
        </form>
    );
}
