import Item from "./Item";

const List = (props) => {
  const { todoList, functions } = props;

  const todoBody = todoList.map((todo) => {
    return <Item item={todo} functions={functions} key={todo.t_id} />;
  });

  return (
    <table className="td_table">
      <thead></thead>
      <tbody>{todoBody}</tbody>
    </table>
  );
};

export default List;
