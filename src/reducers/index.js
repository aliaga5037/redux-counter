import counterReducer from "./counter";
import todoReducer from "./todo";
import { combineReducers } from "redux";

const allReducers = () =>
  combineReducers({
    todo: todoReducer,
    counter: counterReducer,
  });

export default allReducers;
