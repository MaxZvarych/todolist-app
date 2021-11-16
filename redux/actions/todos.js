import { TODOS_CHANGE } from "../constants";

export function changeToDos(todo) {
  return {
    type: TODOS_CHANGE,
    payload: todo,
  };
}
