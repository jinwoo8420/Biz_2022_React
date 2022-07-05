// NodeJS, Express Project의 Web Framework
import express from "express";

/*
import 된 도구를 사용하는 방법

1. const router = express.Router
- express.Router 함수(또는 객체)를 router라는 이름으로 사용

2. const router = express.Router()
- express.Router 함수를 실행하여 return 된 결과를 router 변수에 담기
*/

const router = express.Router();

/*
req : 요청한 데이터가 담겨서 전달
res : 응답 할 때 데이터를 담아서 전달
*/

router.get("/", (req, res, next) => {
  const query = req.query.name;
  //   res.send("나에게 전달 된 값 : " + query);
  res.json({ name: query });
});

export default router;
