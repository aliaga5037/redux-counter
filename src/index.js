import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers());

const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

store.subscribe(() => render());

render();
