import { PropsWithChildren, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Modal, ModalComponent, ModalContext, ModalProps } from "../contexts";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<Modal | null>(null);

  const openModal = (Component: ModalComponent, props: ModalProps = {}) => {
    setModal({ Component, props });
  };

  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {modal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 100,
          }}
        >
          <RemoveScroll>
            <modal.Component {...modal.props} />
          </RemoveScroll>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};
