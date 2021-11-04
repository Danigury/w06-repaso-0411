import actionTypes from "../actions/actionTypes";

const todosReducer = (todos = [], action) => {
  let newTodos;
  switch (action.type) {
    case actionTypes.LOAD_TODOS_API:
      newTodos = [...action.todos];
      break;
    default:
      newTodos = todos;
  }
  return newTodos;
};

export default todosReducer;
