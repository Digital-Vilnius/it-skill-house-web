import React, { FC } from 'react';
import { RootNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/query';
import 'assets/scss/app.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
