import React from "react";
import { IconProps } from "../type";

export function Error({ className }: IconProps) {
    return (
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            className={className}
        >
            <circle cx="25" cy="25" r="25" />
            <polyline points="16,34 25,25 34,16 " />
            <polyline points="16,16 25,25 34,34 " />
        </svg>
    );
}
