import React from "react";

type Props = {
    name: string;
    size: "sm" | "lg";
};

export function Avatar({ name, size }: Props) {
    return (
        <div
            className={`
            
                ${size === "sm" ? "size-10" : "size-20"}
            rounded-full ${
                name === "?" ? "bg-gray-950" : "bg-purple-950"
            } flex justify-center items-center `}
        >
            <p
                className={`text-white font-bold ${
                    size === "sm" ? "text-sm" : "text-2xl"
                }`}
            >
                {name}
            </p>
        </div>
    );
}
