import { useState } from "react";
import moment from "moment";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = (content) => {
    // TodoInput이 전달해준 todo를 todoList에 추가하는 곳
    const todo = {
      t_id: "",
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      content: content,
      t_e_date: "",
    };

    /*
        todoList 배열을 모두 복사하고
        끝에 todo를 추가하여 todoBody 배열 생성
    */
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };

  return (
    <div className="w3-container w3-margin">
      {/* insert_todo => TodoInput */}
      <TodoInput insert_todo={insert_todo} />
      {/* todoList 데이터를 todoList 변수에 담고 TodoList로 보내기 */}
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
