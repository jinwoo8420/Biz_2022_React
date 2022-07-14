import Item from "./item";
import AppContext from "../context/Context";
import { useContext } from "react";

// addrList 배열의 값을 표 형식으로 구현하기
const List = () => {
  const { addrList } = useContext(AppContext);

  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>{addrBody}</tbody>
    </table>
  );
};

export default List;
