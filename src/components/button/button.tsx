import React, { ButtonHTMLAttributes } from "react";

type Preset = "ghost" | "primary";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    preset?: Preset;
}

export function Button({
    children,
    disabled,
    preset,
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
            return "bg-purple-950 text-white px-4 py-2 text-sm font-medium rounded-3xl";
        case "ghost":
            return "text-purple-950 text-sm font-medium";
        default:
            "";
    }
}
