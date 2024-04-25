import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { applyMiddleware, createStore, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk';
 
import { reducers } from './reducers'
import { StrictMode } from 'react';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
//const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(reducers, compose(applyMiddleware(thunk)))
//let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    {/* <PersistGate loading={null} persistor={persistor}>
      
    </PersistGate> */}
  </Provider>
);

