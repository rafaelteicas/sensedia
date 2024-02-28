"use client";

import React, { useState } from "react";
import { UserType, useRemoveUser } from "@/domain";
import { useModal, useToast } from "@/service";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { getPagination } from "@/utils";
import { CurrentPage } from "./current-page";

export const heads = [
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
    isFetching: boolean;
    search: string;
    currentPage: number;
    perPage: number;
    session: string | null;
};

export function UserTable({
    data,
    isLoading,
    isFetching,
    currentPage,
    perPage,
    session,
}: Props) {
    const { setToast } = useToast();
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const { setModal, hideModal } = useModal();
    const { push } = useRouter();
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
            <tr>
                {heads.map((head) => (
                    <th key={head}>
                        <Skeleton height={100} />
                    </th>
                ))}
            </tr>
        );
    }
    if (data) {
        const paginatedData: UserType[] = getPagination(
            data,
            currentPage,
            perPage
        );
        return (
            <>
                {paginatedData.map((user) => (
                    <CurrentPage
                        key={user.id}
                        user={user}
                        onMouseEnter={() => setHoveredRow(user.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                        navigateToProfile={() => push(`/user/${user.id}`)}
                        onClick={() => handleDelete(user)}
                        row={hoveredRow}
                        session={session}
                    />
                ))}
            </>
        );
    }
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
