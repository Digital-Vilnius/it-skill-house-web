import React, { FC } from 'react';
import { RootNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { persistor, store } from 'core/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/query';
import 'assets/scss/theme.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { msalInstance } from 'core/msal';
import { MsalProvider } from '@azure/msal-react';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
            <ToastContainer />
          </PersistGate>
        </Provider>
      </MsalProvider>
    </QueryClientProvider>
  );
};

export default App;
