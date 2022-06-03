import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";

// 루트 리듀서 작성
const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* roottSaga() {
  yield all([counterSaga(), sampleSaga()]);
}
export default rootReducer;
