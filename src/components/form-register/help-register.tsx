import { Heart, LifeRing } from "@/assets";
import GrinAlt from "@/assets/icons/grin-alt";
import React from "react";

const help = [
    { title: "Precisa de ajuda?", icon: <LifeRing /> },
    { title: "Por que se registrar?", icon: <Heart /> },
    { title: "O que está acontecendo?...", icon: <GrinAlt /> },
];

export function HelpRegister() {
    return (
        <div className="flex flex-row gap-8 mb-10">
            {help.map((item) => (
                <div key={item.title}>
                    <p className="text-base text-purple-950 font-medium mb-2">
                        {item.title}
                    </p>
                    <div className="flex flex-row gap-5 items-center">
                        <p className="size-10">{item.icon}</p>
                        <p className="font-medium text-base text-gray-750">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incidente ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
