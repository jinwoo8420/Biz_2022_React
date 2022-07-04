/*
fetch 함수를 사용하여 data.go.kr의 API 연결
*/

const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "MAec5PwsfeOTTFSSf0sq8tHqZVf7rwRAojPGz9ULjUueOA9hv6LMdL4zF71q7Js%2BJWgPlkmwJghzAaOH92yhTg%3D%3D";

const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
