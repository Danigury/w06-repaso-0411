import axios from "axios";
import { loadTodos } from "../actions/actionCreator";

const apiUrl = "https://todos-isdi-coders.herokuapp.com/todos";
export const loadTodosThunk = () => {
  return async (dispatch) => {
    const { data } = await axios.get(apiUrl);

    dispatch(loadTodos(data));
  };
};
