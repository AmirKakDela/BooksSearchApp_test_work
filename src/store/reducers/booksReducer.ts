import {BooksActionTypes, BooksActionTypeTypes} from "../actions/booksAction";
import {BookType} from "../../@types";

export type InitialStateType = {
    books: Array<BookType>
    booksCount: number
    queryString: string
    queryCategory: string
    querySortedBy: string
    startIndex: number
    isLoadingInit: boolean,
    isLoadingMore: boolean,
    booksError: string | null
}

const initialState: InitialStateType = {
    books: [],
    booksCount: 0,
    isLoadingInit: false,
    isLoadingMore: false,
    queryString: '',
    queryCategory: '',
    querySortedBy: '',
    startIndex: 0,
    booksError: null
}


const booksReducer = (state = initialState, action: BooksActionTypes): InitialStateType => {
    switch (action.type) {
        case BooksActionTypeTypes.GET_INIT_BOOKS:
            return {
                ...state,
                books: [...action.payload.books],
                booksCount: action.payload.booksCount,
                queryString: action.payload.queryString,
                startIndex: 30,
                isLoadingInit: false,
                querySortedBy: action.payload.querySortedBy
            }
        case BooksActionTypeTypes.GET_MORE_BOOKS:
            return {
                ...state, books: [...state.books, ...action.payload.books],
                startIndex: state.startIndex + 30, isLoadingMore: false
            }
        case BooksActionTypeTypes.INIT_BOOKS_LOADER :
            return {...state, books: [], isLoadingInit: true}
        case BooksActionTypeTypes.MORE_BOOKS_LOADER:
            return {...state, isLoadingMore: true}
        case BooksActionTypeTypes.SET_BOOKS_ERROR:
            return {...state, isLoadingMore: false, isLoadingInit: false, booksError: action.payload}
        default:
            return state
    }
}

export default booksReducer;