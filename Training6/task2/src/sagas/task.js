import { put, takeEvery, delay, select } from "redux-saga/effects";
import {
  ReadyUpdate,
  SubmitError,
  SubmitSuccess,
  Submitting,
} from "../actions/task";
import * as network from "./network";

function* handleTask(action) {
  try {
    yield put(ReadyUpdate(action.payload));
    console.log("waiting for submit");
    yield delay(2000);

    yield put(Submitting(action.payload));
    console.log("submitting");
    yield delay(2000);

    const online = yield select(network.online);
    console.log("network status", online);
    const success = Math.random() < 0.5;
    console.log("result submit", success);
    if (online) {
      if (success) yield put(SubmitSuccess(action.payload));
      else yield put(SubmitError(action.payload));
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleResubmit(action) {
  try {
    yield put(Submitting(action.payload));
    console.log("submitting");
    yield delay(2000);
    const online = yield select(network.online);
    console.log("network status", online);
    const success = Math.random() < 0.5;
    console.log("result submit", success);
    if (online) {
      if (success) yield put(SubmitSuccess(action.payload));
      else yield put(SubmitError(action.payload));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watcherTaskSaga() {
  yield takeEvery("HANDLE_TASK", handleTask);
  yield takeEvery("RESUBMIT", handleResubmit);
}

export default watcherTaskSaga;
