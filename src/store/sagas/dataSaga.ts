import {all, takeLatest, call, select, put} from "redux-saga/effects";
import {selectDwhLink, setDwhLink, setIsVariablesLoading} from "../reducers/dataReducer";
import {API} from "../../API/API";
import {setVariables} from "../reducers/activityReducer";
import {delay} from "../../utils/helpers";

function* getVariablesFromDwhLink() {
  yield put({type: setIsVariablesLoading.type, payload: true});

  //delay after last entered dwhLink value
  yield call(delay, 1000);

  const dwhLink: string = yield select(selectDwhLink);

  const variables: object = yield call(API.getVariables, dwhLink);

  yield put({type: setVariables.type, payload: Object.keys(variables)});

  yield put({type: setIsVariablesLoading.type, payload: false});
}

export function* dataSaga() {
  yield all([
    takeLatest(setDwhLink.type, getVariablesFromDwhLink)
  ]);
}