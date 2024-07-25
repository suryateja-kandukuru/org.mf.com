import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'jotai';

import App from './app/app';
import { AppContextProvider } from '@org.mf.com/statemanagement';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <Provider>
      <App />
    </Provider>
    </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
