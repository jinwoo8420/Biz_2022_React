const Input = (props) => {
  const { insert_todo } = props;

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = e.target.value;
      insert_todo(todo);
    }
  };

  return (
    <>
      <input className="w3-border w3-hover-light-gray" onKeyDown={onKeyDown} />
    </>
  );
};

export default Input;
