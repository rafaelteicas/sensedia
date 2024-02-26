"use client";

import React, { useEffect, useMemo, useState } from "react";

import { UserType, useGetAllUsers, useRemoveUser } from "@/domain";
import { useModal, useToast } from "@/service";
import { Search, Trash } from "@/assets";
import { Input, Pagination } from "@/components";
import { Skeleton } from "@mui/material";
import { getPagination } from "@/utils";

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
    isFetching: boolean;
    refetch: () => void;
};

export function UserTable({
    data,
    isError,
    isLoading,
    isFetching,
    refetch,
}: Props) {
    const [search, setSearch] = useState("");
    const { setToast } = useToast();
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const { setModal, hideModal } = useModal();

    const filteredUsers = useMemo(() => {
        if (!data) return;
        const filteredData = data.filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.username.toLowerCase().includes(search.toLowerCase())
        );
        return getPagination(filteredData, 1, 1);
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

    if (isLoading || isFetching) {
        return (
            <TableLayout
                TableBody={heads.map((head) => (
                    <th key={head}>
                        <Skeleton />
                    </th>
                ))}
                TableHeader={heads.map((head) => (
                    <th key={head}>{head}</th>
                ))}
                inputFn={(e) => setSearch(e.target.value)}
            />
        );
    }

    if (isError) {
        return (
            <div className="flex flex-1 items-center justify-center flex-col gap-4">
                <p className="text-2xl font-bold">
                    Não foi possível realizar a busca!
                </p>
                <a
                    onClick={refetch}
                    className="p-2 font-medium text-blue-600 cursor-pointer"
                >
                    Buscar novamente
                </a>
            </div>
        );
    }

    return (
        <TableLayout
            TableHeader={heads.map((head) => (
                <th key={head}>{head}</th>
            ))}
            TableBody={filteredUsers?.map((user) => (
                <tr
                    key={user.id}
                    className={styles.rowContainer}
                    onMouseEnter={() => setHoveredRow(user.id)}
                >
                    <td className="h-[100px]">
                        {hoveredRow === user.id && (
                            <div onClick={() => handleDelete(user)}>
                                <Trash color="red" className="cursor-pointer" />
                            </div>
                        )}
                    </td>
                    <td className="text-gray-850 font-bold">{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.days}</td>
                    <td>{user.posts}</td>
                    <td>{user.albums}</td>
                </tr>
            ))}
            inputFn={(e) => setSearch(e.target.value)}
        />
    );
}

function Header({ children }: React.PropsWithChildren) {
    return (
        <thead className={styles.headerContainer}>
            <tr>{children}</tr>
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

type TableProps = {
    inputFn: (e: any) => void;
    TableHeader: React.ReactNode;
    TableBody: React.ReactNode;
};

function TableLayout({ inputFn, TableHeader, TableBody }: TableProps) {
    return (
        <div className="flex flex-1 flex-col">
            <h1 className="text-2xl bold my-10">Usuários</h1>
            <Input label="Procurar" LeftIcon={<Search />} onChange={inputFn} />
            <table className="border-t">
                <Header>{TableHeader}</Header>
                <tbody>{TableBody}</tbody>
            </table>
        </div>
    );
}

const styles = {
    headerContainer: "font-bold text-gray-650 text-left text-sm border-b",
    rowContainer:
        "text-gray-550 text-base font-normal border-b hover:bg-gray-100 ",
};
