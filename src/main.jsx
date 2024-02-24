import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// used provider of react redux to provide store for global state management
// and persistgate from redux-persist to persist the data after every reload
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate >
  </Provider>
)
