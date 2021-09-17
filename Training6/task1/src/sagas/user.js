import { call, takeLatest, delay } from "redux-saga/effects";
import { authUser } from "../api";

function* handleAuthUser() {
  yield delay(4000);
  yield call(authUser);
}

function* watcherUserSaga() {
  yield takeLatest("AUTH_USER", handleAuthUser);
}

export default watcherUserSaga;
