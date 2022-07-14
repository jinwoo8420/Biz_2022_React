/* 
Border 함수 객체
props.children이라는 props의 기본 속성이
함수의 매개변수에 기본적으로 포함되어 있다
props.children 속성을 사용하여
<Border> 객체 </Border> 형식으로 사용하면
처음부터 존재하는 객체들처럼 새로운 합성된 객체가 생성된다
Border라는 객체를 재사용하는것
*/
const Border = ({ children }) => {
  return <>{children}</>;
};

// Layout 함수 객체
const Layout = () => {
  return (
    <>
      <Border>
        <h1>Hello</h1>
        <p>합성을 이용한 Layout 구성</p>
      </Border>
      <Border>
        <h1>Main Section</h1>
      </Border>
    </>
  );
};

export default Layout;