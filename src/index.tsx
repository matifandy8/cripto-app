import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit"
import currencysliceReducer from "./actions/currenciesActions"
import { ThunkAction } from "redux-thunk"
import { CurrencyState } from './actions/currenciesActions';

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, CurrencyState, unknown, Action<string>>;
const store = configureStore({
  reducer: {
    // the convention is to name this currencies rather than currencyStore but CurrencyStore is clearer to me.
    currenciesStore: currencysliceReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
