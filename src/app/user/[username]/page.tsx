"use client";

import { useGetUserById } from "@/domain";
import { Skeleton } from "@mui/material";
import React from "react";

export default function UserProfile({
    params,
}: {
    params: { username: string };
}) {
    const { data, isError, isLoading } = useGetUserById(params.username);

    if (isLoading) {
        return (
            <div className={styles.container}>
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton className="w-60 py-2" />
                <Skeleton className={styles.skeleton} />
                <Skeleton className={styles.skeleton} />
                <Skeleton className={styles.skeleton} />
            </div>
        );
    }

    if (!data || isError) {
        return (
            <div className={styles.container}>
                <div className="size-20 rounded-full bg-gray-850 flex justify-center items-center">
                    <p className="text-white font-bold text-2xl">?</p>
                </div>
                <p className="font-medium">
                    Não foi possível encontrar este usuário
                </p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className="size-20 rounded-full bg-purple-950 flex justify-center items-center">
                <p className="text-white font-bold text-2xl">RC</p>
            </div>
            <p>Informações de usuário</p>
            <div className={styles.userContainerStyle}>
                <p>{data.name}</p>
            </div>
            <div className={styles.userContainerStyle}>{data.username}</div>
            <div className={styles.userContainerStyle}>{data.email}</div>
        </div>
    );
}

const styles = {
    userContainerStyle:
        "text-left border py-2 pl-4 rounded-md bg-slate-100 w-full",
    container: "flex flex-col flex-1 justify-center items-center  gap-4 px-72",
    skeleton: "w-full py-2",
};
