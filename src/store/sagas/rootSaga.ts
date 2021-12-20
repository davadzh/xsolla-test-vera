import { all, fork } from 'redux-saga/effects'
import {dataSaga} from "./dataSaga";
import {activitySaga} from "./activitySaga";

export function* rootSaga() {
  yield all([
    fork(dataSaga),
    fork(activitySaga),
  ]);
}