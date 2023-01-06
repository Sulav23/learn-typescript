import React from "react";
import "./styles.css";
import { Todo } from "../modal";
import TodoItem from "./TodoItem";

interface Props {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <div className="todos">
      {todo.map((item) => (
        <TodoItem todo={item} todos={todo} setTodos={setTodo} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
