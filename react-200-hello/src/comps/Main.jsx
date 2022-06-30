import Sub from "./Sub";

const Main = () => {
  const comp = (
    <div>
      <h1>Hello</h1>
      <p>리액트를 사용하여 컴포넌트 만들기</p>
      <p>3 + 4 = {3 + 4}</p>
      <Sub name="대한민국 만세"></Sub>
    </div>
  );
  return comp;
};

export default Main;
