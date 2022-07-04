# 공공DB API 프로젝트

- data.go.kr의 기상청 기상특보 서비스 활용

## React API 사용

- data.go.kr : 대한민국 공공 DB 서비스 회원가입
- 기상청 기상특보 활용 신청
- Service 키 받기

## react CORS 문제 해결

- http-proxy-middleware 설치 : yarn add http-proxy-middleware
- 현재 react에서 가장 보편적으로 사용하는 컴포넌트
- 실제 localhost:3000에서 apis.data.go.kr로 요청을 보내면 CORS 오류가 나면서 요청 거부
- http-proxy-middleware가 중간에서 마치 localhost:3000 주소를 apis.data.go.kr에서 요청하는 것처럼 변경하여 상대방의 CORS 문제를 우회하여 요청
