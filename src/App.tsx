import React, { FC } from 'react';
import { RootNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { persistor, store } from 'core/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/query';
import 'assets/scss/theme.scss';
import { PersistGate } from 'redux-persist/integration/react';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
