import { useState, useEffect } from "react";
import List from "./List";
import uuid from "react-uuid";

const Main = () => {
  const [todoList, setTodoList] = useState(() => {
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = {
        t_id: uuid(),
        t_todo: e.target.value,
      };
      setTodoList([...todoList, todo]);
      e.target.value = "";
    }
  }; // end onKeyDown

  const todo_delete = (id) => {
    const todoRemove = todoList.filter((todo) => {
      return todo.t_id !== id;
    });
    setTodoList(todoRemove);
  }; // end todo_delete

  const todo_comp = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.t_id === id) {
        // const test2 = todo.t_todo
        //   ? { textdecoration: "line-through" }
        //   : { textdecoration: "none" };

        const test2 = todo.t_todo ? "test" : "test2";

        return { ...todo, t_todo: test2 };
      }
      return todo;
    }); // end map
    setTodoList(todoBody);
  }; // end todo_toggle

  const functions = {
    todo_delete,
    todo_comp,
  };

  return (
    <div>
      <input onKeyDown={onKeyDown} className="w3-border w3-hover-light-gray" />
      <List todoList={todoList} functions={functions} />
    </div>
  );
};

export default Main;
