"use client";
import React, { useMemo, useState } from "react";
import { Input, Pagination, UserTable, heads } from "..";
import { Search } from "@/assets";
import { useGetAllUsers } from "@/domain";
import { useDebounce } from "@/hooks";

type Props = {
    session: string | null;
};

export function Table({ session }: Props) {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, isFetching, refetch } = useGetAllUsers();

    const filteredUsers = useMemo(() => {
        if (!data) return;
        return data.filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    if (isError) {
        return (
            <div className="flex flex-1 flex-col gap-4 justify-center items-center">
                <p className="text-2xl font-bold">
                    Não foi possível realizar a busca!
                </p>
                <a
                    onClick={() => refetch()}
                    className="p-2 font-medium text-blue-600 cursor-pointer"
                >
                    Buscar novamente
                </a>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <h1 className="text-2xl bold my-10">Usuários</h1>
                <Input
                    label="Procurar"
                    LeftIcon={<Search />}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="border-t">
                    <thead className={styles.headerContainer}>
                        <tr>
                            {heads.map((head) => (
                                <th className={"py-2 px-2"} key={head}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <UserTable
                            data={filteredUsers}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            search={search}
                            currentPage={currentPage}
                            perPage={10}
                            session={session}
                        />
                    </tbody>
                </table>
            </div>
            <Pagination
                items={filteredUsers?.length}
                currentPage={currentPage}
                perPage={10}
                onClick={{
                    first: () => setCurrentPage(1),
                    last: () =>
                        setCurrentPage(Math.ceil(filteredUsers!.length / 10)),
                    next: () => setCurrentPage(currentPage + 1),
                    previous: () => setCurrentPage(currentPage - 1),
                    midNext: () => setCurrentPage(currentPage + 1),
                    midPrevious: () => setCurrentPage(currentPage - 1),
                }}
            />
        </>
    );
}

const styles = {
    headerContainer: "font-bold text-left text-gray-650 text-xs border-b",
};
