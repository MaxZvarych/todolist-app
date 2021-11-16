import { TODOS_CHANGE } from "../constants";
import { listItems } from "../../components/Data/MockedData";
const initialState = {
  todos: listItems,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_CHANGE:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
