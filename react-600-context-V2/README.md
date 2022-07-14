# React Props Drilling

- React Component가 여러 겹으로 감싸고 있을때 상위 Component state를 생성하고 그 state를 사용하여 하위(child) Component들이 rendering을 하고나 state를 변경해야 하는 경우가 아주 많다
- 상위 Component에서 여러 겹의 하위 Component로 state를 전달 할 때 중간에 위치한 Component들은 실제로 필요하지 않지만 부모 Component로부터 자식 Component에게 계속해서 props를 Toss 해야하는 경우가 발생한다
- 이러한 Drilling 현상을 방지하기 위해서 Store라는 개념이 생겨났다. Drilling 현상을 방지하기 위하여 기본 React 기능 외에 `Redus`, `Mobx`,`recoil` 등의 3rd LIB를 사용한다
- 3rd part LIB 들이 오히여 React를 학습하는 것보다 어려운 경우가 많다. 그래서 React에서는 Context.Provider라는 도구를 제공하여 단지 Store 기능망르 수행하도록 마련을 해놓았다

# React Context.Provider를 사용하여 Drilling 문제 해결하기

- 3rd part LIB를 사용하여 Drilling 문제를 해결 할 수 있지만 학습 곡선이 매우 커서 큰 프로젝트가 아니면 오히려 불편 할 수 있다
- 현재 React에서는 Context.Provider를 사용하여 일부 문제를 해결 할 수 있다
- 하지만 Context.Provider를 무분별하게 사용한다면 Project의 유지 보수성이 떨어지는 문제가 발생 할 수 있다
- 또한 React 버전이 올라갈수록 여러가지 문제가 해결 되고 있기 때문에 잘 선택해서 사용하면 좋은 도구가 된다
- context-V0에서는 일반덕인 Drilling이 적용되는 코드를 봤고 context-V2에서는 매우 간단하게 Context.Provider를 적용해본다
