import {Dispatch} from "react";
import axios from "axios";
import {BookType} from "../../@types";
import {
    BooksActionTypes,
    initBooksLoader,
    getInitBooks,
    getMoreBooks,
    moreBooksLoader,
    setBooksError
} from "./booksAction";
import {ReducerState} from "../reducers/reducer";
import {url} from "../../config";

export const thunkGetInitBooks = (queryString: string, queryCategory: string, querySortedBy: string) => {
    return async (dispatch: Dispatch<BooksActionTypes>) => {
        dispatch(initBooksLoader())
        try {
            const response = await axios.get(`${url}?q=${queryString}&+subject:${queryCategory}&startIndex=0&maxResults=30&&orderBy=${querySortedBy}`);
            const data = response.data
            const books: Array<BookType> = [];
            const booksCount = data.totalItems
            data.items && data.items.forEach((b: any) => {
                const book: BookType = {
                    id: b.id,
                    authors: b.volumeInfo.authors,
                    category: b.volumeInfo.categories,
                    imageSmall: b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail,
                    imageBig: b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail,
                    description: b.volumeInfo.description,
                    title: b.volumeInfo.title
                }
                books.push(book);
            })
            dispatch(getInitBooks(books, booksCount, queryString, querySortedBy));
        } catch (err) {
            dispatch(setBooksError('Ошибка при загрузке данных'));
            console.log(err)
        }

    }
}

export const thunkGetMoreBooks = () => {
    return async (dispatch: Dispatch<BooksActionTypes>, getState: () => ReducerState) => {
        dispatch(moreBooksLoader());
        try {
            const {queryString, startIndex, booksCount, queryCategory, querySortedBy} = getState().books;
            if (booksCount <= startIndex - 2) {
                return dispatch(setBooksError(''));
            }
            const response = await axios.get(`${url}?q=${queryString}&+subject:${queryCategory}&startIndex=${startIndex}&maxResults=30&&orderBy=${querySortedBy}`);
            const data = response.data
            const books: Array<BookType> = [];
            data.items && data.items.forEach((b: any) => {
                const book: BookType = {
                    id: b.id,
                    authors: b.volumeInfo.authors,
                    category: b.volumeInfo.categories,
                    imageSmall: b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail,
                    imageBig: b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail,
                    description: b.volumeInfo.description,
                    title: b.volumeInfo.title
                }
                books.push(book);
            })
            dispatch(getMoreBooks(books, queryString))
        } catch (err) {
            dispatch(setBooksError('Ошибка при доп загрузке данных'))
        }

    }
}