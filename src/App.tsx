import React, { FC } from 'react';
import { RootNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { persistor, store } from 'core/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/query';
import 'assets/scss/theme.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import ModalProvider from 'core/modal/ModalProvider';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ModalProvider>
            <RootNavigator />
            <ToastContainer />
          </ModalProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
