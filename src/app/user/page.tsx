"use client";

import { useGetAllUsers, useRemoveUser } from "@/domain";
import React, { useMemo, useState } from "react";
import UserTable from "./components/user-table";

export default function User() {
    const { data, isLoading, isError } = useGetAllUsers();

    return <UserTable data={data} isError={isError} isLoading={isLoading} />;
}
