import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릳 이벤트가 payload 안에 들어가지 않도록 화살표 문법으로 두번쨰 파라미터를 추가
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(increase()); // 특정 액션을 디스패치
}

function* decreaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(decrease()); // 특정 액션을 디스패치
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줌
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  /* 
    takeLastest는 기존에 진행 중이던 작업이 있다면 작업을 취소 처리하고
    가장 마지막으로 실행된 작업만을 수행함
    */
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initalState = 0; //객체값이 아닌 숫자도 잘 작동합니다.

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initalState
);

export default counter;
