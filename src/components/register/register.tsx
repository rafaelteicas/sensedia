"use client";

import React, { useEffect, useState } from "react";
import { Input } from "..";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import {
    RegisterSchema,
    registerDays,
    registerSchema,
} from "./register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button/button";
import { useRegisterUser } from "@/domain/user/use-case/use-register-user";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/service/toast/use-toast";

export function Register() {
    const [checkedLabel, setCheckedLabel] = useState<string[]>([]);
    const { setToast } = useToast();
    const queryClient = useQueryClient();
    const { register, handleSubmit, setValue, reset, formState } =
        useForm<RegisterSchema>({
            resolver: zodResolver(registerSchema),
            mode: "onChange",
        });

    function resetFn() {
        setCheckedLabel([]);
        reset();
    }

    const { registerUser, isPending } = useRegisterUser({
        onSuccess: () => {
            setToast({
                icon: "success",
                message: "Usuário cadastrado com sucesso!",
            });
            resetFn();
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
        },
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

    function sendForm(data: RegisterSchema) {
        registerUser(data);
    }

    return (
        <>
            <h1 className="text-2xl bold mb-20 mt-8">Registro</h1>
            <div className="w-full border rounded-[10px] h-full flex flex-1 flex-col p-10">
                <p className="text-sm font-medium text-gray-650 pb-8">
                    REGISTRO
                </p>
                <form onSubmit={handleSubmit(sendForm)}>
                    <div className="grid grid-cols-2 gap-14">
                        <div className="gap-8 grid">
                            <Input
                                required
                                id="username"
                                label="Nome de usuário"
                                InputProps={{ ...register("username") }}
                            />
                            <Input
                                required
                                id="name"
                                label="Nome completo"
                                InputProps={{ ...register("name") }}
                            />
                            <Input
                                required
                                id="email"
                                label="E-mail"
                                InputProps={{ ...register("email") }}
                            />
                        </div>
                        <div className="grid">
                            <Input
                                required
                                id="city"
                                label="Cidade"
                                className="pb-8"
                                InputProps={{ ...register("city") }}
                            />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-650 py-2">
                                    DIAS DA SEMANA
                                </p>
                                <div className="grid grid-cols-3">
                                    {registerDays.map((day) => (
                                        <FormControlLabel
                                            {...register("days")}
                                            key={day}
                                            label={day}
                                            control={
                                                <Checkbox
                                                    sx={{
                                                        color: "#8556AA",
                                                        "&.Mui-checked": {
                                                            color: "#8556AA",
                                                        },
                                                    }}
                                                    checked={checkedLabel.includes(
                                                        day
                                                    )}
                                                    value={day}
                                                    onChange={
                                                        handleCheckedLabel
                                                    }
                                                />
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-8">
                        <Button
                            type="submit"
                            className="bg-purple-950 text-white px-4 py-2 text-sm font-medium rounded-3xl"
                            disabled={
                                !formState.isValid ||
                                formState.isSubmitting ||
                                isPending
                            }
                        >
                            REGISTRAR
                        </Button>
                        <Button
                            type="button"
                            className="text-purple-950 text-sm font-medium"
                            onClick={resetFn}
                        >
                            CANCELAR
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
