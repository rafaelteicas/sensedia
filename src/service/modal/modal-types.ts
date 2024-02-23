type modal = React.ReactNode | null;

export type ModalTypes = {
    modal: modal;
    setModal: (modal: modal) => void;
    hideModal: () => void;
};
