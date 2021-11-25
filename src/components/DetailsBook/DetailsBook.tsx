import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './detailsBook.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";


const DetailsBook = () => {
    const {id} = useParams();
    const state = useTypedSelector(state => state.books.books);
    const book = state.filter(b => {
        return b.id === id
    })

    return (
        <div className="details">
            <div className="details__header">
                <Link to={'/'}>
                    Назад
                </Link>
            </div>
            {book[0] ? <div className="details__wrap">
                <div className="details__img_wrap">
                    <img
                        src={book[0].imageBig || book[0].imageSmall ? book[0].imageBig : 'https://w7.pngwing.com/pngs/10/276/png-transparent-question-mark-computer-icons-book-book-cover-angle-text-rectangle.png'}
                        alt="Book Cover"/>
                </div>
                <div className="details__main">
                    <p className="details__category">
                        Категория: <span>{book[0].category.join(', ')}</span>
                    </p>
                    <p className="details__author">Автор: <span>{book[0].authors ? book[0].authors.join(', ') : null}</span>
                    </p>
                    <p className="details__title">Название: <span>{book[0].title ? book[0].title : null}</span></p>
                </div>
                <div className="details__subtitle">{book[0].description ? book[0].description : null}</div>
            </div> : ''}
        </div>
    );
};

export default DetailsBook;