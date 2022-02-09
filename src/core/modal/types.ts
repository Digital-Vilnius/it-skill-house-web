import { FC } from 'react';

export interface ModalContextValue {
  showModal: <T = undefined>(Component: FC, options: ModalOptions, componentProps?: T) => void;
  hideModal: () => void;
}

export interface ModalOptions {
  title: string;
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
}

export interface ModalState {
  visible: boolean;
  Component?: FC;
  componentProps?: { [key: string]: unknown };
  options?: ModalOptions;
}
