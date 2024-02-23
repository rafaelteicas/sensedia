import React from "react";
import { Input } from "..";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const registerDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export function Register() {
    return (
        <>
            <h1 className="text-2xl bold mb-20 mt-8">Registro</h1>
            <div className="w-full border rounded-[10px] h-full flex flex-1 flex-col p-10">
                <p className="text-sm font-medium text-gray-650 pb-8">
                    REGISTRO
                </p>
                <div className="grid grid-cols-2 gap-14">
                    <div className="gap-8 grid">
                        <Input required label="Nome de usuário" />
                        <Input required label="Nome completo" />
                        <Input required label="E-mail" />
                    </div>
                    <div className="grid">
                        <Input required label="Cidade" className="pb-8" />
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-gray-650 py-2">
                                DIAS DA SEMANA
                            </p>
                            <div className="grid grid-cols-3">
                                {registerDays.map((day) => (
                                    <FormGroup key={day}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    sx={{
                                                        color: "#8556AA",
                                                        "&.Mui-checked": {
                                                            color: "#8556AA",
                                                        },
                                                    }}
                                                />
                                            }
                                            label={day}
                                        />
                                    </FormGroup>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 pt-8">
                    <button className="bg-purple-950 text-white px-4 py-2 text-sm font-medium rounded-3xl">
                        REGISTRAR
                    </button>
                    <button className="text-purple-950 text-sm font-medium">
                        CANCELAR
                    </button>
                </div>
            </div>
        </>
    );
}
