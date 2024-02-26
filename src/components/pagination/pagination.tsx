import React from "react";

type Props = {
    items: number;
    pageNumber: number;
    pageSize: number;
};

export function Pagination({ items, pageNumber, pageSize }: Props) {
    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div className="flex flex-1 justify-between">
            <div className="">{items}</div>
            <div className=""></div>
            <div className=""></div>
        </div>
    );
}
