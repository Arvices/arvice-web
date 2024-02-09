import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./utils/store"
import { Provider } from 'react-redux'

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/style/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
);
