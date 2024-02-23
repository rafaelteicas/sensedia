"use client";

import { Search, Trash } from "@/assets";
import { Input } from "@/components";
import { useGetAllUsers, useRemoveUser } from "@/domain";
import { useModal, useToast } from "@/service";
import React, { useMemo, useState } from "react";

export default function User() {
    const [search, setSearch] = useState("");
    const { setToast } = useToast();
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const { data, isLoading, isError } = useGetAllUsers();
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
            hideModal();
        },
        onError: () => {
            setToast({
                icon: "error",
                message: "Não foi possível remover o usuário!",
            });
            hideModal();
        },
    });

    if (!isLoading || !isError) {
        return (
            <div className="px-72">
                <h1 className="text-2xl bold mb-20 mt-4">Usuários</h1>
                <Input
                    label="Procurar"
                    type="search"
                    LeftIcon={<Search />}
                    className="flex flex-1 w-full"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="border-t mt-6">
                    <thead className="font-bold text-gray-650 text-left text-sm border-b">
                        <tr className="pl-1">
                            <th className="pr-10"></th>
                            <th>USER</th>
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>CIDADE</th>
                            <th>DIAS DA SEMANA</th>
                            <th className="pr-4">POSTS</th>
                            <th className="pr-10">ÁLBUNS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers?.map((user) => (
                            <tr
                                key={user.id}
                                className="text-gray-550 text-base font-normal border-b hover:bg-gray-100"
                                onMouseEnter={() => setHoveredRow(user.id)}
                            >
                                <td className="h-[100px]">
                                    {hoveredRow === user.id && (
                                        <div
                                            onClick={() => {
                                                setModal(
                                                    <>
                                                        <p className="font-bold text-xl">
                                                            Você tem certeza?
                                                        </p>
                                                        <p>
                                                            Você realmente
                                                            deseja remover o
                                                            usuário <br />
                                                            <b className="font-bold">
                                                                {user.id}
                                                            </b>
                                                            ?
                                                        </p>
                                                        <div className="flex flex-row items-center gap-4">
                                                            <button
                                                                className="bg-gray-500 text-white font-bold p-2 rounded"
                                                                onClick={
                                                                    hideModal
                                                                }
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    remove(
                                                                        user.id
                                                                    )
                                                                }
                                                                className="bg-rose-500 text-white font-bold p-2 rounded"
                                                            >
                                                                Excluir
                                                            </button>
                                                        </div>
                                                    </>
                                                );
                                            }}
                                        >
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
            </div>
        );
    }
}
