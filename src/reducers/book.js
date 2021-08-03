import { FETCH_BOOK_DETAILS_FAILED, FETCH_BOOK_DETAILS_START, FETCH_BOOK_DETAILS_SUCCESS } from "../actions/actionTypes";

export default function book(state = {}, action) {
    switch (action.type) {
        case FETCH_BOOK_DETAILS_START:
            return {
                ...state,
                isFetching: true,
            };

        case FETCH_BOOK_DETAILS_SUCCESS:
            return {
                ...state,
                book:action.book,
                isFetching: false,
            };

        case FETCH_BOOK_DETAILS_FAILED:
            return {
                ...state,
                error:action.error,
                isFetching: false,
            };
            
        default:
            return state;
    }
}