# React에서 외부 파일 연결

- html에서는 css, js등을 link href 등을 사용하여 연결
- React public 폴더에 있는 index.html 파일에 css, js 등을 연결 할 수 있지만 React에서는 권장 X
- React에서는 특히 css 파일을 src 폴더에 저장하고 index.js 또는 App.js(ReactJS.js) 파일에서 import하여 사횽하는 것 권장
- React 프로젝트를 build(yarn build) 하면 css, js 파일들을 Transpiling하여 build 폴더에 저장하는데 대부분의 파일을 압축, 난독화 하여 저장
- 압축된 css, js 파일은 client로 전송 될 때 용량이 상대적으로 작아져서 네크워크에 전송된다
- public 폴더에 저장되거나 연결된 파일도 압축이 되기는 하지만 css, script들을 외부 연결을 통해 사용하면 압축이 되지 않아 네트워크에 노출되는 현상 발생

## React의 parents와 child 간의 데이터 공유

- React의 변수를 state라고 하는데 state 변수는 부모가 만들고 child가 공유하여 사용하는 구조
- 부모가 생성한 state 변수는 child가 변경 불가
- state 변수를 어디에 생성하느냐에 따라 전체적인 구조 확정
- 일반적으로 state 변수는 부모 컴포넌트에서 생성하고 부모 컴포넌트에서 변경하는 함수를 만들어서 child에게 전파하는 것이 좋음
