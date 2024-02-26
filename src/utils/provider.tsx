"use client";
import React from "react";
import { Modal, Toast } from "@/components";
import { ModalProvider, ToastProvider } from "@/service";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function Provider({ children }: React.PropsWithChildren) {
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <ModalProvider>
                        <ToastProvider>
                            {children}
                            <Modal />
                            <Toast />
                        </ToastProvider>
                    </ModalProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}
