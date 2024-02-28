import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
    },
});

const AllTheProviders = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

function customRender(
    component: React.ReactNode,
    options?: Omit<RenderOptions, "queries">
) {
    return render(component, { wrapper: AllTheProviders, ...options });
}

export * from "@testing-library/react";
export { customRender as render };
