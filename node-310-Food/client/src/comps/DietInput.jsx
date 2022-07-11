import { useState } from "react"; // state 변수를 만들기 위하여 useState 함수 import
import uuid from "react-uuid";
import moment from "moment";

const DietInput = () => {
  // JSON type의 food state 변수 생성
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY-MM-DD"),
    d_food: "",
    d_qty: "",
    d_cal: "",
  });

  const onChange = (e) => {
    setFood({ [e.target.name]: e.target.value });
  };

  return (
    <div className="w3-row-padding">
      <div className="w3-col s2">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          defaultValue={food.d_date}
          onChange={onChange}
        />
      </div>

      <div className="w3-col s2">
        <input
          type="text"
          name="d_food"
          className="w3-input"
          placeholder="메뉴 입력"
          onChange={onChange}
        />
      </div>

      <div className="w3-col s2">
        <input
          type="text"
          name="d_qty"
          className="w3-input"
          placeholder="섭취량 입력"
          onChange={onChange}
        />
      </div>

      <div className="w3-col s2">
        <input
          type="text"
          name="d_cal"
          className="w3-input"
          placeholder="단위 칼로리 입력"
          onChange={onChange}
        />
      </div>
      <button className="w3-button">저장</button>
    </div>
  );
};

export default DietInput;
