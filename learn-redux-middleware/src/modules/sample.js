import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";

// 액션 타입을 선언합니다.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action) {
  yield put(startLoading(GET_POST)); // 로딩 시작
  // 파라미터로 actions를 받아오면 액션 정보를 조회할 수 있음
  try {
    // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있음
    // 첫 번쨰 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
    const post = yield call(api.getPost, action.payload);

    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUserSaga() {
  yield put(startLoading(GET_USERS)); // 로딩 시작
  try {
    const users = yield call(api.getUsers);

    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUserSaga);
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading이라는 객체에 관리합니다.

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
