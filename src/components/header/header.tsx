"use client";

import React, { useState } from "react";
import { Arrow, Help, Apps, Icon, Logo } from "@/assets";
import { usePathname, useRouter } from "next/navigation";
import { User } from "next-auth";
import { DropdownHeader } from "./dropdown-header";
import { Button } from "..";
import { getInitialsAvatar } from "./get-initials-avatar";
import { getBreadcrumb } from "./get-breadcrumb";
import Link from "next/link";
import { Avatar } from "../avatar/avatar";

type Props = {
    user?: User;
};

export function Header({ user }: Props) {
    const path = usePathname();
    const [dropdown, setDropdown] = useState(false);
    const breadcrumbs = path!!.split("/").filter((path) => path);
    const { push } = useRouter();
    return (
        <>
            <div className={styles.firstHeaderContainer}>
                <Icon />
                <div>
                    <Logo />
                    <p className="text-xs">Treinador De Futebol</p>
                </div>
            </div>
            <div className={styles.secondHeaderContainer}>
                <div className="flex flex-1 gap-2">
                    <a
                        onClick={() => push("/")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Icon color="#8556AA" />
                        <p className={styles.welcome}>Bem vindo</p>
                    </a>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <div
                            key={breadcrumb}
                            className="hidden sm:flex items-center gap-2 "
                        >
                            <Arrow width={16} height={10} />
                            <p
                                className="text-gray75 cursor-pointer"
                                onClick={() =>
                                    push(
                                        `/${breadcrumbs
                                            .slice(0, index + 1)
                                            .join("/")}`
                                    )
                                }
                            >
                                {getBreadcrumb(breadcrumb)}
                            </p>
                        </div>
                    ))}
                </div>
                <Help className="hidden sm:block" />
                <Apps className="hidden sm:block" />
                <div className="border-l">
                    {user ? (
                        <button
                            className="relative hidden items-center gap-2 ml-2 sm:flex"
                            onClick={() => setDropdown((cur) => !cur)}
                        >
                            <Avatar
                                size="sm"
                                name={getInitialsAvatar(user.name || "")}
                            />
                            <p className="text-sm text-gray75">{user.name}</p>
                            {dropdown && (
                                <DropdownHeader
                                    onMouseLeave={() => setDropdown(false)}
                                />
                            )}
                        </button>
                    ) : (
                        <Button preset="primary" className="ml-4">
                            <Link href={"/auth"}>Login</Link>
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}

const styles = {
    firstHeaderContainer:
        "w-full h-20 bg-gray-850 text-white flex items-center gap-2 pl-8",
    secondHeaderContainer:
        "w-full h-16 sticky top-0 bg-white border-b flex items-center pr-8 pl-8 gap-4 z-10",
    welcome: "text-purple-950 font-bold uppercase text-sm cursor-pointer",
};
