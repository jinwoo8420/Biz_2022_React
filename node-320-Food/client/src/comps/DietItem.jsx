import { useState, useContext } from "react";
import DietContext from "../context/DietContext";

const DietItem = ({ food }) => {
  /*
  식품명을 click 했을 때 input box 나타나기
  
  1. DietList에서 isEdit state 변수를 만들고 item을 생성하면서
  isEdit 변수의 상태에 따라 input box 또는 그냥 문자열이 나타남
  => 모든 item이 isEdit 상태를 공유하게 되어 한개의 항목을 click하면 모든 항목에 input box 나타남

  2. DietItem을 별도로 분리하고 DietItem에서 isEdit 상태 변수를 생성한 후 같은 코드로 input box가 나타나게 설정
  똑같은 이름의 isEdit 이지만 각 item마다 서로 다른 isEdit을 만들게 되어 click한 item만 input box가 나타나도록 변경
  */

  const [isEdit, setEdit] = useState(false);
  const { removeFoodItem } = useContext(DietContext);

  const removeEvent = (e, d_id) => {
    /*
        표준 JS 함수 중에서 react에서 사용 할 수 없는 함수들이 일부 있다
        그 중 confirm 함수도 자체 지원이 되지 않아 browse의 함수를 호출하기 위해
        window.confirm()
        */
    if (window.confirm(d_id + " 데이터 삭제")) {
      removeFoodItem(d_id);
    }
  }; // end removeEvent

  const onEdit = (e) => {
    setEdit(true);
  };

  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };

  return (
    <tr key={food.d_id}>
      <td>{food.d_date}</td>
      {isEdit ? (
        <td>
          <input
            name="d_food"
            defalutvalue={food.d_food}
            onKeyDown={onKeypress}
          />
        </td>
      ) : (
        <td onClick={onEdit}>{food.d_food}</td>
      )}
      <td>{food.d_qty}</td>
      <td>{food.d_cal}</td>
      <td>{food.d_qty * food.d_cal}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={(e) => removeEvent(e, food.d_id)}
      >
        &times;
      </td>
    </tr>
  );
};

export default DietItem;
