# 다이어트 App

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 도와주는 App
- NodeJS + Express + MySQL + React 연동

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

## MySQL 연동

- MySQL DB와 연동하기 위해 Dependency 설치

```
npm install mysql2
npm install sequelize
npm install moment
```

- Sequelize 도구 설치 : 반드시 관리자 권한에서 global로 설치

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

- Sequelize 도구를 사용하여 mysql DB 연동 정보 자동화 : 터미널

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u jinwoo8420 -x '!Korea8080' -e mysql -l esm
```

- sequelize-auto를 사용 할 때 `-l esm` 옵션을 생략하면 CommonsJS(ES5 이전) 버전으로 모듈이 생성 된다
- 사용자의 password에 특수문자가 포함된 경우 반드시 '' 사용
- 선택사항

```
-o 폴더 : model 설정 파일이 출력 될 곳
-d DB명 : 사용 할 mysql DB
-h Host : MySQL 서버가 설치 된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속 할 권한이 있는 사용자
-x PASSWORD : MySQL 접속 사용자 비밀번호
-e mysql : 사용 할 데이터베이스 소프트웨어(engine)
-l esm :  ES6+ 버전으로 생성
-l es5 : ES5 버전으로 생성
-p PORTNUM : port 3306 이외의 다른 포트로 사용하는 경우
```
