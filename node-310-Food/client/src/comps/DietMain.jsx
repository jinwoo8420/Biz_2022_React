import DietInput from "./DietInput";
import DietList from "./DietList";

const DietMain = () => {
  return (
    <>
      <DietList />
      <DietInput />
    </>
  );
};

export default DietMain; // 다른 컴포넌트에서 import 하기 위해 함수를 export 처리
