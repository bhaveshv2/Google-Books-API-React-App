import { takeLatest,put,call } from "redux-saga/effects";
import { fetchBooksSuccess,fetchBooksFailed } from "../actions/books";
import { fetchBooksAPI } from "../api";

export function* onFetchBooksAsync() {
  try {
    const response = yield call(fetchBooksAPI);
    console.log("booksSaga:onFetchBooksAsync:response",response);
    yield put(fetchBooksSuccess(response.data));
  } catch (error) {
    yield put(fetchBooksFailed(error));
  }
}

export function* booksSaga() {
  yield takeLatest("FETCH_BOOKS_START", onFetchBooksAsync);
}