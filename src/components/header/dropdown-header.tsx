import React from "react";
import { signOut } from "next-auth/react";
type Props = {
    onMouseLeave: () => void;
};

export function DropdownHeader({ onMouseLeave }: Props) {
    return (
        <div onMouseLeave={onMouseLeave} className={styles.container}>
            {items.map((item) => (
                <div key={item.title} className="group">
                    <p
                        onClick={item.onClick}
                        className="text-gray-75 text-base hover:text-gray-50 text-left ml-4"
                    >
                        <div className="absolute rounded-r-md left-0 w-1 h-6 group-hover:bg-purple-950 " />
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container:
        "absolute right-2 top-[52px] text-gray-50 bg-[#2e2e2e] flex flex-col gap-4 w-40 py-2",
};

const items = [
    {
        title: "Lista de amigos",
    },
    {
        title: "Amigos salvos",
    },
    {
        title: "Notificações",
    },
    {
        title: "Preferências",
    },
    {
        title: "Fechar sessão",
        onClick: () =>
            signOut({
                callbackUrl: "/auth",
            }),
    },
];
