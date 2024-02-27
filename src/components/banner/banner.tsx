import { AlignLeft, Basket, Trophy } from "@/assets";
import React from "react";

export function Banner() {
    return (
        <div className="flex bg-purple-950 h-[100px] w-[screen] items-center justify-center text-white gap-8 -mx-72">
            {bannerItems.map((item) => (
                <div className="flex gap-2" key={item.alt}>
                    {item.icon}
                    <div className="flex flex-col justify-between">
                        <p className="font-bold">{item.title}</p>
                        <p className="font-light">{item.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export const bannerItems = [
    {
        icon: <Basket />,
        alt: "Basket",
        title: "Tipo de quadra",
        sub: "Society",
    },
    {
        icon: <AlignLeft />,
        alt: "Left",
        title: "Nível",
        sub: "Semi-Profissional",
    },
    {
        icon: <Trophy />,
        alt: "Trophy",
        title: "Vitórias",
        sub: "345",
    },
];
