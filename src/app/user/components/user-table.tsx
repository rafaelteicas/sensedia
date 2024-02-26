import React, { useMemo, useState } from "react";

import { UserType, useGetAllUsers, useRemoveUser } from "@/domain";
import { useModal, useToast } from "@/service";
import { Search, Trash } from "@/assets";
import { Input } from "@/components";
import { Skeleton } from "@mui/material";

const heads = [
    "",
    "USER",
    "NOME",
    "E-MAIL",
    "CIDADE",
    "DIAS DA SEMANA",
    "POST",
    "ÁLBUNS",
];

type Props = {
    data: UserType[] | undefined;
    isLoading: boolean;
    isError: boolean;
};

export default function UserTable({ data, isError, isLoading }: Props) {
    const [search, setSearch] = useState("");
    const { setToast } = useToast();
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const { setModal, hideModal } = useModal();
    const filteredUsers = useMemo(() => {
        if (!data) return;
        return data.filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.username.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);
    const { remove } = useRemoveUser({
        onSuccess: () => {
            setToast({
                icon: "success",
                message: "Usuário removido com sucesso!",
            });
        },
        onError: () => {
            setToast({
                icon: "error",
                message: "Não foi possível remover o usuário!",
            });
        },
        onSettled: hideModal,
    });
    function handleDelete(user: UserType) {
        setModal(<Modal id={user.id} hideModal={hideModal} remove={remove} />);
    }
    if (isLoading) {
        return (
            <div className="flex flex-1 flex-col">
                <h1 className="text-2xl bold my-10">Usuários</h1>
                <Input
                    label="Procurar"
                    LeftIcon={<Search />}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="border-t">
                    <Header>
                        {heads.map((head) => (
                            <th key={head}>{head}</th>
                        ))}
                    </Header>
                    <tbody>
                        <tr>
                            {heads.map((head) => (
                                <td key={head}>
                                    <Skeleton />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <table className="min-w-full border-t mt-6">
            <Header>
                {heads.map((head) => (
                    <th key={head}>{head}</th>
                ))}
            </Header>
            <tbody>
                {filteredUsers?.map((user) => (
                    <tr
                        key={user.id}
                        className={styles.rowContainer}
                        onMouseEnter={() => setHoveredRow(user.id)}
                    >
                        <td className="h-[100px]">
                            {hoveredRow === user.id && (
                                <div onClick={() => handleDelete(user)}>
                                    <Trash
                                        color="red"
                                        className="cursor-pointer ml-2"
                                    />
                                </div>
                            )}
                        </td>
                        <td className="text-gray-850 font-bold">
                            {user.username}
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td>{user.days}</td>
                        <td>{user.posts}</td>
                        <td>{user.albums}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Header({ children }: React.PropsWithChildren) {
    return (
        <thead className={styles.headerContainer}>
            <tr className="pl-1">{children}</tr>
        </thead>
    );
}

type ModalProps = {
    id: string;
    hideModal: () => void;
    remove: (id: string) => void;
};

function Modal({ id, hideModal, remove }: ModalProps) {
    return (
        <>
            <p className="font-bold text-xl">Você tem certeza?</p>
            <p>
                Você realmente deseja remover o usuário <br />
                <b className="font-bold">{id}</b>?
            </p>
            <div className="flex flex-row items-center gap-4">
                <button
                    className="bg-gray-500 text-white font-bold p-2 rounded"
                    onClick={hideModal}
                >
                    Cancelar
                </button>
                <button
                    onClick={() => remove(id)}
                    className="bg-rose-500 text-white font-bold p-2 rounded"
                >
                    Excluir
                </button>
            </div>
        </>
    );
}

const styles = {
    headerContainer: "font-bold text-gray-650 text-left text-sm border-b",
    rowContainer:
        "text-gray-550 text-base font-normal border-b hover:bg-gray-100",
};
