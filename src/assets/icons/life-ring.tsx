import React from "react";
import { IconProps } from "../type";

export function LifeRing({
    width = 45,
    height = 45,
    color = "#8556AA",
    className,
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clip-path="url(#clip0_794_720)">
                <path
                    d="M22.5 0.703125C10.4619 0.703125 0.703125 10.4619 0.703125 22.5C0.703125 34.5381 10.4619 44.2969 22.5 44.2969C34.5381 44.2969 44.2969 34.5381 44.2969 22.5C44.2969 10.4619 34.5381 0.703125 22.5 0.703125ZM37.7663 11.2112L32.1941 16.7834C31.2284 15.1523 29.85 13.773 28.2166 12.8059L33.7888 7.23375C35.3027 8.35707 36.6429 9.69728 37.7663 11.2112ZM22.5 30.9375C17.8401 30.9375 14.0625 27.1599 14.0625 22.5C14.0625 17.8401 17.8401 14.0625 22.5 14.0625C27.1599 14.0625 30.9375 17.8401 30.9375 22.5C30.9375 27.1599 27.1599 30.9375 22.5 30.9375ZM11.2112 7.23375L16.7834 12.8059C15.1523 13.7716 13.773 15.15 12.8059 16.7834L7.23375 11.2112C8.35704 9.69726 9.69726 8.35704 11.2112 7.23375ZM7.23375 33.7888L12.8059 28.2166C13.7716 29.8477 15.15 31.227 16.7834 32.1941L11.2112 37.7663C9.69728 36.6429 8.35707 35.3027 7.23375 33.7888ZM33.7888 37.7663L28.2166 32.1941C29.8477 31.2284 31.227 29.85 32.1941 28.2166L37.7663 33.7888C36.6429 35.3027 35.3027 36.6429 33.7888 37.7663Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_794_720">
                    <rect width="45" height="45" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}