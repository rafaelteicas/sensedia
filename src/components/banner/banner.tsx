import Image from "next/image";
import React from "react";
import { bannerItems } from "./banner-items";

export function Banner() {
    return (
        <div className="flex bg-purple-950 h-[100px] w-screen items-center justify-center text-white gap-8 -mx-72">
            {bannerItems.map((item) => (
                <div className="flex gap-2" key={item.alt}>
                    <Image
                        src={item.image}
                        width={52}
                        height={52}
                        alt={item.alt}
                    />
                    <div className="flex flex-col justify-between">
                        <p className="font-bold">{item.title}</p>
                        <p className="font-light">{item.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
