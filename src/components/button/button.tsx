import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export function Button({ children, disabled, ...buttonProps }: Props) {
    return (
        <button
            style={{
                backgroundColor: disabled ? "#919191" : undefined,
                color: disabled ? "#e5e5e5" : undefined,
            }}
            {...buttonProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
