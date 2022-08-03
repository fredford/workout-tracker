// Library imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// CSS imports
import "./index.css";
// Redux store
import store from "./store";
// Context Providers
import { SettingsProvider } from "./contexts/settingsContext";
import { WorkoutProvider } from "./contexts/workoutContext";
// Local component imports
import App from "./App";

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
