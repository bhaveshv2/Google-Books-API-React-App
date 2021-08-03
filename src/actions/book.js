import { FETCH_BOOK_DETAILS_START, FETCH_BOOK_DETAILS_SUCCESS, FETCH_BOOKS_FAILED } from "./actionTypes";

// export function fetchBook(id) {
//     return (dispatch) => {
//         const url = `https://www.googleapis.com/books/v1/volumes/${id}`;

//         fetch(url)
//             .then(response => {
//                 // console.log(response);
//                 return response.json();
//             })
//             .then(data => {
//                 // console.log(data);
//                 dispatch(updateBookDetails(data));
//             })
//     }
// }

export function updateBookDetails(id) {
    return {
        type: FETCH_BOOK_DETAILS_START,
        id
    }
}

export function updateBookDetailsSuccess(book) {
    return {
        type: FETCH_BOOK_DETAILS_SUCCESS,
        book
    }
}

export function updateBookDetailsFailed(error) {
    return {
        type: FETCH_BOOKS_FAILED,
        error
    }
}