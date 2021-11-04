import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { loadTodosThunk } from "./redux/thunk/todoThunks";

function App() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodosThunk());
  }, [dispatch]);

  return (
    <main>
      <form>
        <input type="text"></input>
        <button type="button">Add</button>
      </form>
      <div className="App">
        {todos.map(({ task }) => (
          <p>{task}</p>
        ))}
      </div>
    </main>
  );
}

export default App;
