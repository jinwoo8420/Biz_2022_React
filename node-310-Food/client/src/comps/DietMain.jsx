/*
useState : state 변수를 선언 할 때 사용 할 함수

useEffect : React의 생명주기 함수로 Component가 rendering 할 때 자동으로 코드를 실행하여
node 서버로부터 데이터를 fetch(SELECT ALL)하여 state 변수에 담는 코드가 작성 될 곳
*/

import { useState, useEffect } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";

/*
DB에서 데이터들을 fetch하여 List를 보여줄 예정
List를 보여주고 item을 클릭하거나 변경하는 코드를 추가하려면
어디에서 state 데이터를 만들어야 할 것인지 고민해야한다
DietMain에서 DB를 fetch하고 item등을 변화시키는 event도 선언하여
Main Component가 감싸고 있는 child Component들이 공유 할 수 있도록 설계를 한다
*/

const DietMain = () => {
  /*
  useState와 useEffect는 함수 내부에서 실행 될 코드
  */

  const [foods, setFoods] = useState([]);

  /*
  데이터를 fetch 할 때 사용 할 함수 선언
  */

  const fetchFood = async () => {
    const res = await fetch("/food/selectAll");

    if (res.ok) {
      return await res.json();
    }
  };

  /*
  DietMain 컴포넌트가 rendering 될 때 실행하여
  fetchFood() 함수를 호출하고 결과를 foods state 변수에 세팅하기
  
  useEffect의 두번째 매개변수
  두번째 매개변수에 state 변수를 설정하면
  state 변수 값이 변화 될 때마다 useEffect 함수가 실행된다

  state 변수의 변화를 감지하여 어떤 event를 실행 할 때 사용하는 방법
  두번째 매개변수에 빈(blank) 배열([])을 설정하면 컴포넌트가 rendering 될 때 한번만 실행하도록 하는 방법
  두번째 매개변수를 생략하게 되면 useEffect 함수가 무한 반복으로 실행되는 현상이 발생한다
  */

  useEffect(() => {
    /*
    fetchFood() 함수는 async 방식으로 선언되었기 때문에
    최종적으로 return한 데이터는 .then(result) 함수를 사용하여
    값을 받을 수 있다
    async 함수가 return 값을 비동기 callback 방식으로 처리하기
    */
    fetchFood().then((result) => {
      console.table(result);
      setFoods(result);
    });
  }, []);

  return (
    <>
      <DietList foods={foods} />
      <DietInput />
    </>
  );
};

export default DietMain; // 다른 컴포넌트에서 import 하기 위해 함수를 export 처리
