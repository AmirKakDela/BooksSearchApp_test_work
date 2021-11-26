import React from 'react';
import './bookList.scss';
import Book from "../Book/Book";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {BookType} from "../../@types";
import {useDispatch} from "react-redux";
import {thunkGetMoreBooks} from "../../store/actions/thunkBooksAction";

type BookListProps = {};

const BookList: React.FC<BookListProps> = (props) => {
    const books = useTypedSelector(state => state.books.books)
    const booksCount = useTypedSelector(state => state.books.booksCount);
    const isInitLoader = useTypedSelector(state => state.books.isLoadingInit);
    const isMoreLoader = useTypedSelector(state => state.books.isLoadingMore);
    const error = useTypedSelector(state => state.books.booksError);
    const dispatch = useDispatch();
    console.log(books)

    const booksRender = () => {
        return (
            books && books.map((b: BookType) => {
                return (
                    <Book key={b.id} book={b}/>
                )
            })
        )
    }

    const handleLoadMore = () => {
        dispatch(thunkGetMoreBooks())
    }

    return (
        <div className="book-list_wrap">
            {error ? <h2>Что то пошло не так :(</h2> :
                isInitLoader ? <h2>Загрузка...</h2> : books.length === 0 ?
                    <h2>Здесь будут книги</h2> :
                    <>
                        <h4 className="book-list__title">Found {booksCount} Results</h4>
                        <div className="book-list">
                            {booksRender()}
                        </div>
                    </>}
            {isMoreLoader ? <h2>Загрузка...</h2> : null}
            {books.length !== 0 ? <div className="books-list__load-more">
                <p
                    onClick={handleLoadMore}
                >Load More</p>
            </div> : null}
        </div>
    );
};


export default BookList;