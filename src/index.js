import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { SettingsProvider } from "./contexts/settingsContext";
import { WorkoutProvider } from "./contexts/workoutContext";

function start() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <SettingsProvider>
            <WorkoutProvider>
              <App />
            </WorkoutProvider>
          </SettingsProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

start();
