import React, { ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    RenderHookOptions,
    RenderOptions,
    render,
    renderHook,
} from "@testing-library/react";

export const wrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    // eslint-disable-next-line react/display-name
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

function customRender<T = unknown>(
    component: ReactElement<T>,
    options?: Omit<RenderOptions, "wrapper">
) {
    return render(component, { wrapper: wrapper(), ...options });
}

function customRenderHook<Result, Props>(
    renderCallback: (props: Props) => Result,
    options?: Omit<RenderHookOptions<Props>, "wrapper">
) {
    return renderHook(renderCallback, {
        wrapper: wrapper(),
        ...options,
    });
}

export { customRender as render };
export { customRenderHook as renderHook };
export * from "@testing-library/react";
