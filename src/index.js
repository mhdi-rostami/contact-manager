import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/bootstrap/bootstrap.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>
);
