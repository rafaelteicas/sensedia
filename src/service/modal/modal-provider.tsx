"use client";

import { createContext, useState } from "react";
import { ModalTypes } from "./modal-types";

export const ModalContext = createContext({} as ModalTypes);

export function ModalProvider({ children }: React.PropsWithChildren) {
    const [modal, setModalVisible] = useState<ModalTypes["modal"] | null>(null);

    function setModal(modal: ModalTypes["modal"]) {
        return setModalVisible(modal);
    }

    function hideModal() {
        setModalVisible(null);
    }

    return (
        <ModalContext.Provider value={{ modal, hideModal, setModal }}>
            {children}
        </ModalContext.Provider>
    );
}
