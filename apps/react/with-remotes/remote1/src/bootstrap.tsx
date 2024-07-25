import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'jotai';
import { AppContextProvider } from '@org.mf.com/statemanagement';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AppContextProvider>
    <Provider>
    <App />
    </Provider>
    </AppContextProvider>
  </StrictMode>
);
