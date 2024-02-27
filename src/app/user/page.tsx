"use client";

import { useGetAllUsers } from "@/domain";
import React, { useState } from "react";
import { UserTable, heads } from "./components/user-table";
import { Search } from "@/assets";
import { Input, Pagination } from "@/components";

export default function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const { data, isLoading, isError, isFetching, refetch } = useGetAllUsers({
        search,
    });

    if (isError) {
        return (
            <div className="flex flex-1 gap-4">
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

    if (data) {
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
                                <th className="py-2" key={head}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <UserTable
                            data={data}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            search={search}
                            currentPage={currentPage}
                            perPage={10}
                        />
                    </tbody>
                </table>
            </div>
            <Pagination
                items={data?.length}
                currentPage={currentPage}
                perPage={10}
                onClick={{
                    first: () => setCurrentPage(1),
                    last: () => setCurrentPage(Math.ceil(data!.length / 10)),
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
    headerContainer: "font-bold text-gray-650 text-left text-sm border-b ",
};
