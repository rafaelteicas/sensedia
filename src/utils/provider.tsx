"use client";
import React, { useState } from "react";
import { Modal, Toast } from "@/components";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

export function Provider({ children }: React.PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    {children}
                    <Modal />
                    <Toast />
                </ThemeProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}
