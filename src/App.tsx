import React, { FC } from 'react';
import { RootNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { persistor, store } from 'core/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/query';
import 'assets/scss/theme.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from 'core/msal';

const App: FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
            <ToastContainer />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </MsalProvider>
  );
};

export default App;
