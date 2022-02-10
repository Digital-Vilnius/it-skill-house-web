import React, { FC, PropsWithChildren, useState } from 'react';
import { ModalContext } from './context';
import { ModalOptions, ModalState } from './types';
import { Modal } from 'react-bootstrap';

const ModalProvider: FC = (props) => {
  const { children } = props;
  const [state, setState] = useState<ModalState>({ visible: false });

  const showModal = <T,>(
    Component: FC<T>,
    options: ModalOptions,
    componentProps?: PropsWithChildren<T>
  ) => {
    const { size = 'lg', centered = true, title } = options;

    setState({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Component,
      componentProps,
      options: { size, centered, title },
      visible: true,
    });
  };

  const hideModal = () => {
    setState({ ...state, visible: false });
  };

  return (
    <ModalContext.Provider value={{ hideModal, showModal }}>
      {children}
      <Modal size={state.options?.size} centered={state.options?.centered} show={state.visible}>
        <Modal.Header onHide={hideModal} closeButton>
          <Modal.Title>{state.options?.title}</Modal.Title>
        </Modal.Header>
        {!!state.Component && <state.Component {...state.componentProps} />}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
