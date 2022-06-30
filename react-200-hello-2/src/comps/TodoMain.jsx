import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const { todoList, setTodoList } = useState([]);

  const insert_todo = () => {
    // TodoInput이 전달해준 todo를 todoList에 추가하는 곳
  };

  return (
    <div className="w3-container w3-margin">
      {/* TodoInput => insert_todo */}
      <TodoInput insert_todo={insert_todo} />
      <TodoList />
    </div>
  );
};

export default TodoMain;
