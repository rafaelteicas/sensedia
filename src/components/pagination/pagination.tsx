import React from "react";
import { Button } from "..";

type Props = {
    items?: number;
    currentPage: number;
    perPage: number;
    onClickNext?: () => void;
    onClickPrevious?: () => void;
    onClickLast?: () => void;
    onClickFirst?: () => void;
};

export function Pagination({
    items,
    currentPage,
    perPage,
    onClickNext,
    onClickPrevious,
    onClickLast,
    onClickFirst,
}: Props) {
    const pagesCount = Math.ceil(items!! / perPage);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    const middlePage = Math.ceil(pages.length / 2);

    return (
        <div className="flex items-center justify-between flex-1 flex-row">
            <p>TOTAL {items}</p>
            <div className="flex gap-4 items-center ">
                <Button
                    onClick={currentPage > 1 ? onClickPrevious : undefined}
                    preset="outlined"
                >
                    Anterior
                </Button>
                <>
                    <div
                        onClick={onClickFirst}
                        className="size-10 flex items-center border-gray-250 justify-center border-2 rounded-full cursor-pointer"
                    >
                        1
                    </div>
                    {currentPage > 1 && (
                        <div className="flex flex-row flex-1">
                            <a className="text-gray-750 size-10 border-gray-250 border-2 rounded-l-lg flex items-center justify-center cursor-pointer hover:text-gray-850">
                                {currentPage - 1}
                            </a>
                            <a className="bg-gray-250 text-white size-10 border-gray-250 flex items-center justify-center cursor-pointer hover:text-gray-850">
                                {currentPage}
                            </a>
                            <a className="text-gray-750 size-10 border-gray-250 border-2 rounded-r-lg flex items-center justify-center cursor-pointer hover:text-gray-850">
                                {currentPage + 1}
                            </a>
                        </div>
                    )}
                    <div
                        onClick={onClickLast}
                        className="size-10 flex items-center border-gray-250 justify-center border-2 rounded-full cursor-pointer"
                    >
                        {pages.length}
                    </div>
                </>
                <Button
                    onClick={
                        currentPage < pages.length ? onClickNext : undefined
                    }
                    preset="outlined"
                >
                    Posterior
                </Button>
            </div>
            <div className="">IR PARA PÁGINA</div>
        </div>
    );
}
