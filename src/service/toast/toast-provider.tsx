"use client";

import React, { createContext, useState } from "react";
import { Toast, ToastTypes } from "./toast-types";

export const ToastContext = createContext({} as ToastTypes);

export function ToastProvider({ children }: React.PropsWithChildren) {
    const [toast, setToastVisible] = useState<Toast | null>(null);
    function setToast({ icon, message }: Toast) {
        setToastVisible({ message, icon });
    }
    function hideToast() {
        setToastVisible(null);
    }
    return (
        <ToastContext.Provider value={{ toast, setToast, hideToast }}>
            {children}
        </ToastContext.Provider>
    );
}
