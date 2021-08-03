import { all, fork } from "redux-saga/effects";
import { bookSaga } from "./bookSaga";
import { booksSaga } from "./booksSaga";

export function* rootSaga() {
  yield all([
      fork(bookSaga),
      fork(booksSaga)
  ]);
}