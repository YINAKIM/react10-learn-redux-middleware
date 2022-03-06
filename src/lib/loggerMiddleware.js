/**
 * loggerMiddleware에서 할 일
 * 1. 이전상태
 * 2. 액션정보
 * 3. 새로워진 상태
 * @param store
 * @returns {function(*): function(*)}
 */
const loggerMiddleware = store => next => action => {
    console.group(action && action.type);   // 액션 타입별로 로그를 그룹화


    // 1. 이전상태 로그찍기
    console.log('이전상태',store.getState());

    // 2. 액션정보 로그찍기
    console.log('액션',action);


    // 3. 새로워진 상태 로그찍기
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음상태',store.getState());

    console.groupEnd(); // 그룹끝
};

export default loggerMiddleware;
