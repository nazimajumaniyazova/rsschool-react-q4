import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Error from './components/Error/Error.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from './context/searchContext.tsx';
import { CardListContextProvider } from './context/cardListContext.tsx';
import { Provider } from 'react-redux/es/exports';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <CardListContextProvider>
          <Provider store={store}>
            <ErrorBoundary fallback={<Error />}>
              <App />
            </ErrorBoundary>
          </Provider>
        </CardListContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
