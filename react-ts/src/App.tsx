import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("learn React"), new Todo("learn TypeScript")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
