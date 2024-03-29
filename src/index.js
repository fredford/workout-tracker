// Library imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// CSS imports
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
// Redux store
import store from "./store";
// Context Providers
import { WorkoutProvider } from "./contexts/workoutContext";
// Local component imports
import App from "./App";

function start() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <WorkoutProvider>
            <App />
          </WorkoutProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

start();
