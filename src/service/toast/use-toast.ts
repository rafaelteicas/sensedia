import { create } from "zustand";
import { ToastTypes } from "./toast-types";

const useToastStore = create<ToastTypes>((set) => ({
    toast: null,
    setToast: (toast) => set({ toast }),
    hideToast: () => set({ toast: null }),
}));

export function useToast() {
    const setToast = useToastStore((state) => state.setToast);
    const hideToast = useToastStore((state) => state.hideToast);

    return {
        setToast,
        hideToast,
    };
}

export function useToastZustand() {
    return useToastStore((state) => state.toast);
}
