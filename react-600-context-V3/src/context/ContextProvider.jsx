import { createContext, useContext, useState } from "react";

const AppContext = createContext();

/*
각각 props가 필요한 Component들이
useContext를 사용하여 props들을 분해하던 코드를
여기에서 함수로 선언하고 결과를 return 한다

useContext 함수를 대신하는 사용자 정의 Hook 함수
useContext 함수는 어떤 Provider Store에 저장된 데이터인지를 항상 명시해줘야한다
함수를 사용 할 때 반드시 무엇인가를 명시해주는 것은 코딩을 하는 입장에서 다소 불편 할 수 있다
그래서 원래 있던 useContext를 useAppContext로 재정의하고
사용자는 이제 어떤 Provider를 사용해야 되는지 걱정하지 않아도 될 수 있도록 만든다

사용자 정의 Hook 함수 규칙
1. 접두사는 반드시 use로 시작
2. 접미사는 만들고자하는 원래 Hook 이름 사용
useContext => useMyContext
useState => useMyState
useEffect => useMyEffect
3. 원래의 Hook 함수 연산을 수행한 후 그 결과를 return 해야한다
*/
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
/*
Hook 함수
React는 처음에 class를 사용하여 Component를 만들었다
JS class를 사용하면 기존의 JS 코드의 장점을 많이 활용하기가 다소 어렵다
Java class에 비하면 class를 만드는데 상당히 복잡한 코드들이 필요하다
class에 method를 추가하거나 어떤 변수를 선언 할 때도 상당히 어려움이 있다

React에서는 class로 Component를 제작하는 대신
함수를 사용하여 Component를 제작하는 문법을 도입한다
16 버전 이전에는 함수형 Component에서는 class Component에 비해
Life Cycle 관리가 매우 어려웠다 
(Hook 함수는 16.8버전부터 사용)

useState() : state 변수를 생성하는 함수
useEffect() : state 변수가 변동 될 때 React 사용자가 어떤 코드를 실행하고자 할 때 코드를 작성하는 함수
              화면이 rendering 될 때  / fetch 데이터를 가져오고자 할 때
              1. 화면이 최초 rendering 될 때 자동으로 호출되는 함수
              2. state 변수를 지정하여 state 변수가 변화 될 때

Hook 함수는 모두가 use 접두사로 시작

useContext() : ContextProvider의 Store에 저장된 변수, 함수를 가져오는 Hook 함수
*/

/*
Context.Provider 역할을 수행하는 Component
props.children 속성을 매개변수로 받고 있다
Component 내에서 state들을 선언

App.js에서 AppContext.Provider로 Component들을 묶고
여기에 value 값을 지정한 코드를 AppContextProvider라는 객체함수로 선언
*/
const AppContextProvider = ({ children }) => {
  /*
  address state 변수가 생성되고
  address state 변수를 변경시키는 setAddress 함수 선언
  */
  const [address, setAddress] = useState({
    a_name: "abc",
    a_tel: "010-1111-1111",
    a_address: "서울특별시",
  });

  const [addrList, setAddrList] = useState([]);
  const [isEdit, setEdit] = useState(false);

  /*
  Store에 보관하기 위한 bundling

  Store에 보관 할 때 개별적인 요소들로 보낼 수 있지만
  관리 측면에서 bundling 하는 것이 좋다
  */

  const props = {
    address,
    setAddress,
    setAddrList,
    addrList,
    isEdit,
    setEdit,
  };

  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
}; // end AppContextProvider

export { useAppContext, AppContextProvider };
