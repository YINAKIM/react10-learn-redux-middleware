### 리덕스 미들웨어?
액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서, 
사전에 지정된 작업들을 실행한다. (액션과 리듀서의 중간자)   
>액션 >>> 미들웨어 >>> 리듀서 >>> 스토어에 저장되는 순서
>

## 미들웨어가 할 수 있는 작업 
- 전달받은 액션을 단순히 **콘솔에 기록**
- 전달받은 액션정보를 기반으로 **액션을 아예 취소시킴**
- 전달받은 액션정보를 기반으로 **다른 종류의 액션을 추가로 디스패치**

# 미들웨어의 기본구조
```javascript
// 화살표함수로
const loggerMiddleware = store => next => action => {
    // 미들웨어의 기본구조
}

// 선언형으로 풀면
const loggerMiddleware = function loggerMiddleware(store){ 
    return function (next) { 
        return function (action) { 
            // 미들웨어 기본구조
        }
    }
}
```
파라미터 설명
- store : 리덕스 스토어 인스턴스
- next : 함수형태, store.dispatch와 비슷한 역할이긴 하나

  → next(action)을 호출하면 → 그다음 처리해야 할 미들웨어에게 action을 넘겨준다.

  → 만약 다음미들웨어가 없다면? 리듀서에게 action을 넘겨주는 것

  → 미들웨어에서 next를 사용하지 않으면? action이 리듀서에게 전달되지 않는다. (무시된다.)

- action : 디스패치된 액션 

# 리덕스미들웨어 적용하기
- 리덕스미들웨어는 스토어를 생성하는 과정에서 적용한다.   
- /src/index.js 에서 루트리듀서로 createStore할 때 `applyMiddleware(적용할미들웨어)` 로 적용
```javascript
import {applyMiddleware, createStore} from "redux";
import loggerMiddleware from "./lib/loggerMiddleware";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware)); // store생성시 미들웨어 적용
```

