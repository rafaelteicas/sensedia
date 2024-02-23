import { z } from "zod";

export const registerDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export const registerSchema = z.object({
    name: z.string().min(1, "Nome muito curto"),
    username: z.string().min(1, "Username muito curto"),
    email: z.string().email("Insira um e-mail válido!"),
    city: z.string().min(1),
    days: z
        .array(z.string())
        .min(1)
        .transform((values) => {
            if (registerDays.every((val) => values.includes(val))) {
                return "Todos os dias";
            }

            if (values.includes("Sab" && "Dom")) {
                return "Final de semana";
            }

            if (values.includes("Seg" && "Ter" && "Qua" && "Qui" && "Sex")) {
                return "Dias da semana";
            }

            return values
                .map((values) => {
                    switch (values) {
                        case "Seg":
                            return "Segunda";
                        case "Ter":
                            return "Terça";
                        case "Qua":
                            return "Quarta";
                        case "Qui":
                            return "Quinta";
                        case "Sex":
                            return "Sexta";
                        case "Sab":
                            return "Sábado";
                        case "Dom":
                            return "Domingo";
                        default:
                            return "Valor inválido";
                    }
                })
                .join(", ");
        }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
