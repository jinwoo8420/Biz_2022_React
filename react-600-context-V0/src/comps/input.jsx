// Main으로부터 전달받은 변수를 받기 위해 props 선언
const Input = (props) => {
  const { address, setAddress, addrList, setAddrList } = props; // props로부터 address state 변수 분해
  const { a_name, a_tel, a_address } = address; // address state 변수로부터 각각 속성 요소 분해

  /*
  input box의 value 속성에 변수를 할당하면
  input box는 read only 상태가 된다
  만약 화면의 input box에 키보드로 문자열을 입력하면
  value 속성에 연결된 변수(state, 일반)의 값을 직접 변경하는 성질이 발생한다
  react에서는 state 변수를 임의로 변경하는 것이 불가하다
  이러한 특성을 유지하기 위해 value={변수} 형태로 할당이 되면
  read only(수정불가) 성질이 발생한다

  이러한 경우 defalutValue를 사용하여 변수를 할당 할 수도 있지만
  간혹 defalutValue로 설정된 변수 값은 state의 특성을 제대로 발휘하지 못한다
  그래서 defalutValue 보다는 value 속성을 사용한다

  input box에 문자열을 키보드로 입력하면
  input box의 onChange 이벤트를 사용하여 setState() 함수를 통하여
  state 변수에 값을 변경하도록 하는 코드를 작성해야 한다

  input box에 입력된 문자열을 onChange 이벤트가 가로채고
  가로챈 문자열을 setState 함수를 통하여 state 변수를 변경하고
  state의 rendering 특성에 따라 input box에 문자열이 나타나는 코드가 된다
  */

  const onChangeEvent = (e) => {
    const { name, value } = e.target; // e.target.name과 value 속성을 각각 name, value 변수로 추출하기
    /*
    JS에서는 변수에 담긴 문자열을 직접 변수명으로 생성하는 방법이 있다
    const name = "a_name" 이라는 변수가 있을 때
    [name] 형식으로 사용하면 마치 a_name 이라는 변수가 만들어 진것처럼 사용 할 수 있다
    event 핸들러의 e.target.name 값을 이용하여
    각 input이 공통으로 사용 할 수 있는 코드 작성이 가능하다
    */

    // [name]=value

    setAddress({ ...address, [name]: value });
    /*
    다음의 코드는 각각 input의 event에 따라서
    setAddress({...address, a_name: value });
    setAddress({...address, a_tel: value });
    setAddress({...address, a_address: value });
    의 코드가 자동으로 생성된다
    */

    /*
    setAddress(...address, { [name]: value });
    이 코드는 기존의 address에 담긴 데이터를 복사하면서
    {[name] : value} 코드의 name 변수에 해당하는 값만 변경한다

    react에서는 state 변수 = 값 같은 코드는 절대 금지이므로
    반드시 setState 함수를 사용하여 값을 변경해야 한다
    때문에 Main의 setAddress 함수를 props로 전달받아 사용해야 한다
    */
  };

  /*
  저장 버튼을 클릭하면 address에 저장된 데이터를 addrList에 추가하기
  addrList도 Main에서 만든 state 배열이다
  때문에 addrList에 데이터를 추가하려면 Main에서 함수를 생성하여
  props로 전달하고 여기의 onClickEvent에서 호출하여 addrList에 추가한다

  Main setAddrList 함수를 props로 전달받고
  setAddrList 함수를 사용하여 addrList에 추가하는 코드를 작성한다
  */

  const onClickEvent = (e) => {
    // addrList 배열을 복제하고 addrList state 변수를 추가하여 새로운 addrList 세팅
    setAddrList([...addrList, address]);
  };

  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={address.a_tel}
      />
      <input
        onChange={onChangeEvent}
        name="a_address"
        placeholder="주소"
        value={props.address.a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
