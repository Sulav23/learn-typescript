import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./modal";

const App: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoInput) {
      setTodo([...todo, { id: Date.now(), todo: todoInput, isDone: false }]);
      setTodoInput("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleAdd={handleAdd}
      />
      {todo.length > 0 ? (
        <TodoList todo={todo} setTodo={setTodo} />
      ) : (
        <h2>No Todos Found.</h2>
      )}
    </div>
  );
};

export default App;
