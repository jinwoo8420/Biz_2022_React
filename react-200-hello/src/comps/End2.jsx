const End2 = (name) => {
  /* 
    현재 comp에서만 사용 할 수 있도록 private Style을 지정하고
    tag comp에 style keyword를 사용하여 가정한다
    style의 속성 이름은 kebab-case(font-style)를 사용 할 수 없고
    마이너스 기호를 제거하고 Camel-case를 사용해야 한다
    속성 값들은 반드시 문자열로 만들어야 한다
  */
  const h1Style = {
    color: "blue",
    fontStyle: "intalic",
  };
  /*
    jsx의 tag 규칙
    여러 tag를 사용 할 때 반드시 가장 바깥쪽을 감싸는 group tag가 있어야 한다
    <div></div>
    <div></div>
    <div></div>
    <p></p>

    <div>
      <div></div>
      <div></div>
      <div></div>
      <p></p>
    <div>

    <>
      <div></div>
      <div></div>
      <div></div>
      <p></p>
    </>
   */

  return (
    <>
      <h1 style={h1Style}>내가 받은 name = {name}</h1>
    </>
  );
};

export default End2;
