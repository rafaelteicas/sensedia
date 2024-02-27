import React from "react";
import { Button } from "..";

type Props = {
    items?: number;
    currentPage: number;
    perPage: number;
    onClick: {
        next: () => void;
        previous: () => void;
        first: () => void;
        last: () => void;
        midPrevious: () => void;
        midNext: () => void;
    };
};

export function Pagination({ items, currentPage, perPage, onClick }: Props) {
    const pagesCount = Math.ceil(items!! / perPage);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    const middlePage = Math.ceil(pages.length / 2);

    if (items! >= perPage) {
        return (
            <div className="flex items-center justify-between flex-1 flex-row">
                <p className="text-xs font-medium text-gray-750">
                    TOTAL {items}
                </p>
                <div className="flex gap-4 items-center ">
                    <Button
                        onClick={currentPage > 1 ? onClick.previous : undefined}
                        preset="outlined"
                        disabled={currentPage <= 1}
                    >
                        Anterior
                    </Button>
                    <>
                        <div
                            onClick={onClick.first}
                            className="size-10 flex items-center border-gray-250 text-gray-750 justify-center border-2 rounded-full cursor-pointer"
                        >
                            1
                        </div>
                        {currentPage > 1 && (
                            <div className="flex flex-row flex-1 items-center justify-center">
                                {currentPage > 1 && <p className="pr-2">...</p>}
                                <a
                                    onClick={onClick.midPrevious}
                                    className="text-gray-750 size-10 border-gray-250 border-2 rounded-l-lg flex items-center justify-center cursor-pointer hover:text-gray-850"
                                >
                                    {currentPage - 1}
                                </a>
                                <a className="bg-gray-250  text-white size-10 border-gray-250 flex items-center justify-center cursor-pointer hover:text-gray-850">
                                    {currentPage}
                                </a>
                                {currentPage < pages.length && (
                                    <>
                                        <a
                                            onClick={onClick.midNext}
                                            className="text-gray-750 size-10 border-gray-250 border-2 rounded-r-lg flex items-center justify-center cursor-pointer hover:text-gray-850"
                                        >
                                            {currentPage + 1}
                                        </a>
                                        <p className="pl-2">...</p>
                                    </>
                                )}
                            </div>
                        )}
                        <div
                            onClick={onClick.last}
                            className="size-10 flex items-center text-gray-750 border-gray-250 justify-center border-2 rounded-full cursor-pointer"
                        >
                            {pages.length}
                        </div>
                    </>
                    <Button
                        onClick={
                            currentPage < pages.length
                                ? onClick.next
                                : undefined
                        }
                        disabled={currentPage >= pages.length}
                        preset="outlined"
                    >
                        Posterior
                    </Button>
                </div>
                <div className="text-xs font-medium text-gray-750">
                    IR PARA PÁGINA
                </div>
            </div>
        );
    }
}
