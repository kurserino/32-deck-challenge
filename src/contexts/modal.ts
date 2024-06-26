import { FC, createContext } from 'react';

// TODO pass props type to modal component
export type ModalComponent = FC<any>;

export type ModalProps = Record<string, any>;

export type Modal = {
  Component: ModalComponent;
  props: ModalProps;
};

type ModalContextProps = {
  openModal: (Component: ModalComponent, props?: ModalProps) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);
