import { create } from "zustand";
import { ModalTypes } from "./modal-types";

export function useModal() {
    const setModal = useModalStore((state) => state.setModal);
    const hideModal = useModalStore((state) => state.hideModal);

    return {
        setModal,
        hideModal,
    };
}

export function useModalZustand() {
    return useModalStore((state) => state.modal);
}

const useModalStore = create<ModalTypes>((set) => ({
    modal: null,
    setModal: (modal) => set({ modal }),
    hideModal: () => set({ modal: null }),
}));
