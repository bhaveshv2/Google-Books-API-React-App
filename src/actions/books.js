
import { FETCH_BOOKS_START,FETCH_BOOKS_SUCCESS,FETCH_BOOKS_FAILED } from "./actionTypes";

// export function fetchBooks() {
//     return (dispatch) => {
//         const url = "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a";
//         fetch(url)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 dispatch(updateBooks(data.items));
//             })
//     }
// }

export function fetchBooks() {
    return {
        type: FETCH_BOOKS_START
    }   
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books
    }
}

export function fetchBooksFailed(error) {
    return {
        type: FETCH_BOOKS_FAILED,
        error
    }
}


