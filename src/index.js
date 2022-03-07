import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { SettingsProvider } from "./contexts/settingsContext";

function start() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <SettingsProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SettingsProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

start();
