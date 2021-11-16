import { createStore, combineReducers } from "redux";
import toDoReducer from "./redux/reducers/toDoReducer";
const rootReducer = combineReducers({ todos: toDoReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
