"use client";

import { Modal } from "@/components";
import { Toast } from "@/components/toast/toast";
import { ModalProvider } from "@/service/modal/modal-provider";
import { ToastProvider } from "@/service/toast/toast-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

export function Provider({ children }: React.PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ModalProvider>
                <ToastProvider>
                    {children}
                    <Modal />
                    <Toast />
                </ToastProvider>
            </ModalProvider>
        </QueryClientProvider>
    );
}
