import { z } from "zod";

const days = {
    Seg: "Segunda",
    Ter: "Terça",
    Qua: "Quarta",
    Qui: "Quinta",
    Sex: "Sexta",
    Sab: "Sábado",
    Dom: "Domingo",
};

export const registerDays = Object.keys(days);

type Days = keyof typeof days;

function getDays(day: Days[]) {
    if (registerDays.every((values) => day.includes(values as Days))) {
        return "Todos os dias";
    }
    if (day.includes("Sab" && "Dom")) {
        return "Final de semana";
    }
    return day.map((value) => days[value]).join(", ");
}

export const registerSchema = z.object({
    name: z.string().min(1, "Nome muito curto"),
    username: z.string().min(1, "Username muito curto"),
    email: z.string().email("Insira um e-mail válido!"),
    city: z.string().min(1),
    days: z
        .array(z.string())
        .min(1)
        .transform((value) => getDays(value as Days[])),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
