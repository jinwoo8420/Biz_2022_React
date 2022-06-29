import React from "react";
import BucketItem from "./BucketItem";

function BucketList(props) {
  const { bucketList, functions } = props;

  /*
  bucketList 배열을 forEach하여
  각 배열의 요소를 내부 함수로 전달하고
  내부 함수에서 연산을 수행한 후
  return을 하면 그 결과를 모두 모아서
  새로운 배열 bucketBody를 만든다

  map을 사용하여 list comps를 구현 할 때
  각 라인의 설정에 UNIQUE인 key 값을 지정해주어야
  데이터를 rendering 할 때 효율적으로 설정 할 수 있다
  */

  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem item={bucket} functions={functions} key={bucket.b_id} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>중요도</th>
          <th>시작</th>
          <th>Bucket</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
}

export default BucketList;
