"use client";

import { useGetUserById } from "@/domain";
import React from "react";

export default function UserProfile({
    params,
}: {
    params: { username: string };
}) {
    const { data } = useGetUserById(params.username);
    console.log(data);

    return (
        <div className="px-72 py-10">
            <div className="">{data?.name}</div>
            <div className="">{data?.username}</div>
            <div className="">{data?.email}</div>
        </div>
    );
}
