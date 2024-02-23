import { useContext } from "react";
import { ModalContext } from "./modal-provider";

export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("Should be have a context");
    return context;
}
