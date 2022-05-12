import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { SettingsProvider } from "./contexts/settingsContext";
import { SetsProvider } from "./contexts/setsContext";

function start() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <SettingsProvider>
          <SetsProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </SetsProvider>
        </SettingsProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

start();
