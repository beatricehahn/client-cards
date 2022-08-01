import React from 'react';
// used for the DOM on websites
import ReactDOM from 'react-dom/client';
// react allows you to add css to individual components
// ./directory_path
import './index.css';
import App from './containers/App';
// service worker allows app to be faster
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
