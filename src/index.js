import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { fetchUser } from "./redux/reducers/user";
import { useDispatch } from "react-redux";
import { fetchExercises } from "./redux/reducers/exercises";
import { ThemeProvider } from "./contexts/themeContext";

function start() {
  store.dispatch(fetchUser());
  store.dispatch(fetchExercises());

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

start();
