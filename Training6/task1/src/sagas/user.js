import { call, takeLatest, put, delay } from "redux-saga/effects";
import jwt_decode from "jwt-decode";
import { authUser } from "../api";

function* handleAuthUser(action) {
  try {
    console.log("come to saga");
    yield delay(3000);
    const data = yield call(authUser, action.payload);
    const token = data.token;
    if (token) yield put({ type: "AUTH_USER_SUCCESS",payload: {user: jwt_decode(token), accessToken:token}}); else {
      alert(data.error);
      yield put({type: "AUTH_USER_FAILED"});
    }
  } catch (err) {
    console.log(err);
  }
}

function* watcherUserSaga() {
  yield takeLatest("AUTH_USER", handleAuthUser);
}

export default watcherUserSaga;
