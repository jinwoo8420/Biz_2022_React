import { useState } from "react"; // react로부터 useState 함수 추출
import Input from "./input";
import List from "./list";
import View from "./view";

const Main = () => {
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

  return (
    <>
      <Input
        address={address}
        setAddress={setAddress}
        addrList={addrList}
        setAddrList={setAddrList}
      />
      <View address={address} />
      <List addrList={addrList} />
    </>
  );
};

export default Main;
