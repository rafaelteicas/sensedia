import React, { ButtonHTMLAttributes } from "react";

type Preset = "ghost" | "primary" | "outlined";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    preset?: Preset;
}

export function Button({
    children,
    disabled,
    preset = "primary",
    className = "",
    ...buttonProps
}: Props) {
    const style = getButtonPreset(preset);
    return (
        <button
            className={`${style} ${className}`}
            style={{
                backgroundColor: disabled ? "#919191" : undefined,
                color: disabled ? "#e5e5e5" : undefined,
            }}
            disabled={disabled}
            {...buttonProps}
        >
            {children}
        </button>
    );
}

function getButtonPreset(preset?: Preset) {
    switch (preset) {
        case "primary":
            return "bg-purple-950 text-white px-4 py-2 text-sm font-medium rounded-3xl uppercase";
        case "ghost":
            return "text-purple-950 text-sm font-medium uppercase";
        case "outlined":
            return "uppercase text-gray-750 border-2 rounded-3xl px-4 py-2 text-xs font-medium border-gray-250";
        default:
            "";
    }
}
