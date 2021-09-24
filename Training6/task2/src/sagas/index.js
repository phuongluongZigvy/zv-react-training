import { all } from "redux-saga/effects";
import watcherTaskSaga from "./task";


export default function* rootSaga() {
  yield all([watcherTaskSaga()]);
}
