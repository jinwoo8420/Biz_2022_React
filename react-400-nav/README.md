# React Project Navigation

- React Project에서 메뉴 시스템 구현하기

## Dependency 추가하기

- React Navi를 구현하기 위해 `react-router-dom` 필요

```
yarn add react-router-dom
```

## React Router 이해하기

- React의 화면 구현은 SPA(Single Page Application) 구조
- 일반적인 화면 구현은 Nav(menu)를 구현하는 방법에 따라 다수의 페이지가 필요
- Menu를 통해서 페이지를 전환하는 방식
- React Nav 구조는 전체 모든 페이지가 하나
- Nav에서 메뉴를 클릭하면 감춰진 페이지가 앞으로 나타나는 구조로 인식
- react-router-dom을 사용하여 구현하는 nav = 라우터
- 메뉴를 클릭했을때 페이지가 나타나도록 하는 것 = 라우팅
