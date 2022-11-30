import { all, put, takeEvery, fork, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/api/login');
}
//여기선 * 을 붙이지않는다

function* logIn(action) {
  try {
    yield delay(1000);
    //const result = yield call(logInAPI, action.data); //call fork는 call,fork(함수, 매개변수)
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      err: err.response.data,
    });
  }
}
//성공 결과 result.data  실패 결과 err.response.data 에 담겨있음. put = dispatch

function logOutAPI(data) {
  return axios.post('/api/logout');
}

function* logOut(action) {
  try {
    yield delay(1000);
    //const result = yield call(logOutAPI, action.data); 서버가 없을땐 delay로 1초 기다렸다 나오게
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      err: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/api/logout'); //signUpAPI는 generator가 아님.
}

function* signUp(action) {
  try {
    yield delay(1000);
    //const result = yield call(signUpAPI, action.data); 서버가 없을땐 delay로 1초 기다렸다 나오게
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      err: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn); //LOG_IN 이나 LOG_IN_REQUEST 할떄 불러오나 같음
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
