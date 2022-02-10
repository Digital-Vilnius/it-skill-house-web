import { FC, PropsWithChildren } from 'react';

export interface ModalContextValue {
  showModal: <T = unknown>(
    Component: FC<T>,
    options: ModalOptions,
    componentProps?: PropsWithChildren<T>
  ) => void;
  hideModal: () => void;
}

export interface ModalOptions {
  title: string;
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
}

export interface ModalState {
  visible: boolean;
  Component?: FC<unknown>;
  componentProps?: PropsWithChildren<unknown>;
  options?: ModalOptions;
}
