import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './reducer';
import { BrowserRouter } from 'react-router-dom'
import './index.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(allReducer)

root.render (
     <Provider store={store}>
          <BrowserRouter>
               <App/>
          </BrowserRouter>
     </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals