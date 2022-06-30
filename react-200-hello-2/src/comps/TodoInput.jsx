const TodoInput = (props) => {
  const { insert_todo } = props;

  /*
    input box에 키보드로 문자열을 입력하는 중에 Enter를 누르면
    데이터를 TodoMain의 insert_todo에게 보내서 todoList에 추가 요청
  */

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // insert_todo 호출하며 입력된 todo 전송
      insert_todo(e.target.value);
    }
  };

  return (
    <>
      {/* 
      input box onKeyDown 핸들러 등록 
      키보드 입력을 감시
      */}
      <input
        placeholder="TODO INPUT"
        className="w3-input w3-border w3-hover-light-gray"
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default TodoInput;
