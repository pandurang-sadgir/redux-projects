import { combineReducers } from "redux";
import { counter } from "../reducer/counter"; // reducer
import {todoReducer} from '../reducer/todo';
export  const RootReducer = combineReducers({counter,todoReducer});
// create root reducer which contains all reducers.