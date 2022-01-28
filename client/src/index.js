import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL =  process.env.REACT_APP_API || "http://localhost:3001"
=======
axios.defaults.baseURL =  

// process.env.REACT_APP_API
  //  || 
 "http://localhost:3001"
>>>>>>> ca01ccf157a4560443434385d9512852c616f236
  



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
