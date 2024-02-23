import { useModalContext } from "@/service/modal/use-modal-context";
import React from "react";

export function Modal() {
    const { modal } = useModalContext();
    if (!modal) return;
    return (
        <div className="fixed font-light flex-col p-4 flex flex-1 gap-4 justify-center top-1/2 left-1/2 -translate-x-1/2 bg-gray-850 text-gray-100 z-10 rounded">
            {modal}
        </div>
    );
}
