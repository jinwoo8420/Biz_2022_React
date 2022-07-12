const DietList = ({ foods }) => {
  const foodsBody = foods.map((food) => {
    return (
      <tr key={food.d_id}>
        <td>{food.d_date}</td>
        <td>{food.d_food}</td>
        <td>{food.d_qty}</td>
        <td>{food.d_cal}</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>칼로리</th>
        </tr>
      </thead>
      <tbody>{foodsBody}</tbody>
    </table>
  );
};

export default DietList;
