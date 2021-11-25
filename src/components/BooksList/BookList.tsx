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
        <>
            {error ? <h4>{error}</h4> :
                <div className="book-list-wrap">
                    {isInitLoader && books.length === 0 ?
                        <h4 className="books-list__preload">Идет загрузка...</h4> : books.length !== 0 ?
                            <>
                                <h4 className="book-list__title">Found {booksCount} Result</h4>
                                <div className="book-list">
                                        {booksRender()}
                                </div>
                                {isMoreLoader ? <h4 className="books-list__loader-more">Идет загрузка...</h4> : null}
                                <div className="books-list__load-more">
                                    <p
                                        onClick={handleLoadMore}
                                    >Load More</p>
                                </div>
                            </>
                            : <h4 className="books-list__preload">Здесь буду книги</h4>}

                </div>
            }
        </>
    );
};


export default BookList;