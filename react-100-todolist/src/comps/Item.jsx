function Item(props) {
  const { item, functions } = props;
  const { todo_delete, todo_comp } = functions;

  return (
    <tr>
      <td className="delete_btn" onClick={() => todo_delete(item.t_id)}>
        &times;
      </td>
      <td className="todo_content" onClick={() => todo_comp(item.t_id)}>
        {item.t_todo}
      </td>
    </tr>
  );
}

// onClick={() => todo_comp(item.t_id)}

export default Item;
