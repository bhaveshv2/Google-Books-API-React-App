import { takeLatest,put,call } from 'redux-saga/effects';
import { updateBookDetailsSuccess,updateBookDetailsFailed } from '../actions/book';
import { fetchBookAPI } from '../api';

export function* onFetchBookAsync(id) {
    try{
        const response = yield call(fetchBookAPI, (id));
        // console.log(response);
        yield put(updateBookDetailsSuccess(response.data));
    }catch(error){
        yield put(updateBookDetailsFailed(error));
    }
}

export function* bookSaga() {
    yield takeLatest('FETCH_BOOK_DETAILS_START', onFetchBookAsync);
}