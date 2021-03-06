import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { CurrencyState} from './features/CurrencySlice';
import currenciesSliceReducer from "./features/CurrencySlice"
import { userSlice } from './features/UserSlice';


export type AppThunk = ThunkAction<void, CurrencyState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    currenciesStore: currenciesSliceReducer,
    user: userSlice.reducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store} >
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
