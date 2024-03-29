import React from "react";
import { IconProps } from "../type";

export function Arrow({ color = "#E2E2E2", height = 6, width = 5 }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 5 6" fill="none">
            <path
                d="M4.25115 2.27942C4.65999 2.67282 4.65999 3.32718 4.25115 3.72058L2.19338 5.70068C1.55807 6.312 0.5 5.86176 0.5 4.9801L0.5 1.0199C0.5 0.138242 1.55807 -0.311997 2.19338 0.299324L4.25115 2.27942Z"
                fill={color}
            />
        </svg>
    );
}
