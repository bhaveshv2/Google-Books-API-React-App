import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_START,FETCH_BOOKS_FAILED } from "../actions/actionTypes";


export default function books(state=[],action) {
  switch (action.type) {
    case FETCH_BOOKS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state, 
        books:action.books,
        isFetching: false,
      };

    case FETCH_BOOKS_FAILED:
      return {
        ...state, 
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
}