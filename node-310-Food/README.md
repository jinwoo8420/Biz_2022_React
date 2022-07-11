# 다이어트 App

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 도와주는 App
- NodeJS + Express + MongoDB + React 연동

## NodeJS Backend Project 생성

- 프로젝트 생성 : express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 생성

- node-310-Food 폴더에서 React client 생성
- client 폴더에서 터미널 열기
- yarn 실행
- yarn build 실행하여 build 생성

## NodeJS에서 client 인식시키기

- node-310-Food/app.js 열기
- `app.use(express.static(path.join("./client/build")));` 변경
- `app.use("/", indexRouter);` 삭제 또는 주석처리
- node-310-Food 폴더에서 서버 Start : nodemon 실행
- Web Browser에서 localhost:3000 주소 입력

## React 프로젝트 파일 이름 변경

- App._ 으로 시작되는 파일을 모두 ReactJS._ 으로 변경

## MongoDB 연동

- mongoose dependency 설치 : npm install mongoose
- 날짜 및 시간 : client/yarn add moment
- UUID Key 생성 도구 설치 : client/yarn add react-uuid
