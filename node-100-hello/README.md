# NodeJS, Express, React Full Stack Project

- NodeJS, Express 프로젝트를 생성하기 위한 도구 설치 : `npm install -g express-21c`
- NodeJS, Express 프로젝트 생성 : `express-21c myproject`
- myproject 폴더에서 React Client 프로젝트 생성 : `create-react-app client`
- NodeJS 프로젝트와 React 프로젝트 관련 파일들의 이름이 혼동 될 수 있으므로 파일 이름 변경 : `App.* => React.*`
- client/src/index.js 파일을 열어서 `import App from "./App.js" => import ReactJS from "./React.js"` 변경
- 기타 파일 import 부분에 오류가 있는지 확인 후 변경
- React Client Build : `yarn build`
- client/build 폴더 생성 확인

# NodeJS 서버와 React Client 연동

- Node 서버의 app.js 파일을 열어서 static 설정을 `./client/build`로 변경
- Node 서버의 실행 웹 화면을 새로고침하여 React 화면이 나타나는지 확인

# NodeJS와 MongoDB 연동

- MongoDB는 local에 서버를 설치하여 사용 할 수도 있고 mongodb.com에 회원가입을 하여 무료 cloud 서비스 이용
- NodeJS와 MongoDB를 연동하기 위하여 Dependency 설치 : mongoose를 설치하여 NoSQL을 DBMS Schema처럼 사용 => `npm install mongoose`
