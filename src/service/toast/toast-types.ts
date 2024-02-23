export type Toast = {
    message: string;
    icon: "error" | "success";
};

export type ToastTypes = {
    toast: Toast | null;
    setToast: (toast: Toast) => void;
    hideToast: () => void;
};
