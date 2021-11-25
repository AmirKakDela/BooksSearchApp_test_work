import React from 'react';
import './book.scss'
import {BookType} from "../../@types";
import {Link} from 'react-router-dom';

type BookProps = {
    book: BookType
}

const Book: React.FC<BookProps> = (props) => {
    const {book} = props;
    return (
        <Link to={`/book/${book.id}`}
              state={{book}}
        >
            <div className="book">
                <img
                    src={book.imageSmall ? book.imageBig : 'https://w7.pngwing.com/pngs/10/276/png-transparent-question-mark-computer-icons-book-book-cover-angle-text-rectangle.png'}
                    alt="" className="book-image"/>
                <p className="book__category">{book.category ? book.category[0] : 'Неизвестно'}</p>
                <h4 className="book__name">{book.title}</h4>
                <p className="book__author">{book.authors ? book.authors.join(', ') : 'Неизвестно'}</p>
            </div>
        </Link>
    );
};

export default Book;