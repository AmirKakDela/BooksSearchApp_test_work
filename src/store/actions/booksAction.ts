import {BookType} from "../../@types";

export enum BooksActionTypeTypes {
    GET_INIT_BOOKS = 'GET_INIT_BOOKS',
    GET_MORE_BOOKS = 'GET_MORE_BOOKS',
    INIT_BOOKS_LOADER = 'INIT_BOOKS_LOADER',
    MORE_BOOKS_LOADER = 'MORE_BOOKS_LOADER',
    SET_BOOKS_ERROR = 'SET_BOOKS_ERROR'
}

export type BooksActionTypes = GetInitBooksActionType | InitBooksLoadingActionType |
    GetMoreBooksActionType | MoreBooksLoaderActionType | SetBooksErrorActionType

type GetInitBooksActionType = {
    type: BooksActionTypeTypes.GET_INIT_BOOKS,
    payload: { books: Array<BookType>, booksCount: number, queryString: string, querySortedBy: string }
}

type InitBooksLoadingActionType = {
    type: BooksActionTypeTypes.INIT_BOOKS_LOADER
}

type  GetMoreBooksActionType = {
    type: BooksActionTypeTypes.GET_MORE_BOOKS,
    payload: { books: Array<BookType>, queryString: string }
}

type MoreBooksLoaderActionType = {
    type: BooksActionTypeTypes.MORE_BOOKS_LOADER
}

type SetBooksErrorActionType = {
    type: BooksActionTypeTypes.SET_BOOKS_ERROR,
    payload: string
}


export const getInitBooks = (books: Array<BookType>, booksCount: number, queryString: string, querySortedBy: string): GetInitBooksActionType => {
    return {
        type: BooksActionTypeTypes.GET_INIT_BOOKS,
        payload: {books, booksCount, queryString, querySortedBy}
    }
}


export const getMoreBooks = (books: Array<BookType>, queryString: string): GetMoreBooksActionType => {
    return {
        type: BooksActionTypeTypes.GET_MORE_BOOKS,
        payload: {books, queryString}
    }
}

export const initBooksLoader = (): InitBooksLoadingActionType => {
    return {
        type: BooksActionTypeTypes.INIT_BOOKS_LOADER
    }
}

export const moreBooksLoader = (): MoreBooksLoaderActionType => {
    return {
        type: BooksActionTypeTypes.MORE_BOOKS_LOADER
    }
}

export const setBooksError = (error: string): SetBooksErrorActionType => {
    return {
        type: BooksActionTypeTypes.SET_BOOKS_ERROR,
        payload: error
    }
}

