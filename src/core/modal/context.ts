import { createContext } from 'react';
import { ModalContextValue } from './types';

const defaultContextValue: ModalContextValue = {
  showModal: () => {},
  hideModal: () => {},
};

export const ModalContext = createContext<ModalContextValue>(defaultContextValue);
export const ModalConsumer = ModalContext.Consumer;
