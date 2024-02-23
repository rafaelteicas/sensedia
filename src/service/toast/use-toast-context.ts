import { useContext } from "react";
import { ToastContext } from "./toast-provider";

export function useToastContext() {
    const context = useContext(ToastContext);
    if (!context) throw new Error("Should be have a context");
    return context;
}
