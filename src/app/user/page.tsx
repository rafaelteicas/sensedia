"use client";

import { useGetAllUsers } from "@/domain";
import React from "react";
import { UserTable } from "./components/user-table";

export default function User() {
    const { data, isLoading, isError, isFetching, refetch } = useGetAllUsers();

    return (
        <UserTable
            data={data}
            isError={isError}
            isLoading={isLoading}
            isFetching={isFetching}
            refetch={refetch}
        />
    );
}
