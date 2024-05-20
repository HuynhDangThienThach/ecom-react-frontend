import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/dist/carousel";
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
         <App />
    </ShopContextProvider>

);

