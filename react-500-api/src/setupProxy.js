// Common JS 문법 ES5 이전 문법
// http-proxy-middleware 컴포넌트에서 createProxyMiddleware 함수 사용 선언
const { createProxyMiddleware } = require("http-proxy-middleware");

/*
react에서 /get/... 으로 요청을 보내면
자동으로 /get 대신에 http://apis.data.go.kr에서 요청하는 것처럼
주소를 변경하여 상대방의 CORS 문제를 우회하여 진행 
*/

module.exports = (app) => {
  app.use(
    "/get",
    createProxyMiddleware({
      target: "http://apis.data.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/get": "",
      },
    })
  );
};
