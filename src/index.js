import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { redditApi } from './features/api/apiSlice';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ApiProvider api={redditApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);
