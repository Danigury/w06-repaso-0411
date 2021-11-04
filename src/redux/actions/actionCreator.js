import actionTypes from "./actionTypes";

export const loadTodos = (todos) => ({
  type: actionTypes.LOAD_TODOS_API,
  todos,
});
