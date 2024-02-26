import React from "react";
import { signOut } from "next-auth/react";
type Props = {
    onMouseLeave: () => void;
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

export function DropdownHeader({ onMouseLeave }: Props) {
    return (
        <div onMouseLeave={onMouseLeave} className={styles.container}>
            {items.map((item) => (
                <p
                    key={item.title}
                    onClick={item.onClick}
                    className="hover:text-gray-300 text-left"
                >
                    {item.title}
                </p>
            ))}
        </div>
    );
}

const styles = {
    container:
        "absolute right-2 top-[52px] text-gray-50 bg-gray-850 flex flex-col gap-4 p-4",
};
