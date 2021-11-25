import * as React from 'react';
import './search.scss';
import {AiOutlineSearch} from 'react-icons/ai';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {thunkGetInitBooks} from "../../store/actions/thunkBooksAction";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import SortedBySelect from "../SortedBySelect/SortedBySelect";

type SearchProps = {};

const Search: React.FC<SearchProps> = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [categoryValue, setCategoryValue] = useState<string>('');
    const [sortedByValue, setSortedByValue] = useState<string>('relevance')
    const dispatch = useDispatch();

    const handleSubmit = () => {
        setSearchValue('');
        dispatch(thunkGetInitBooks(searchValue, categoryValue, sortedByValue));
    }

    return (
        <div className="search">
            <h1 className="search__title">Search for Books</h1>
            <form action="" className="search__form" onSubmit={e => e.preventDefault()}>
                <div className="search__input-wrap">
                    <input type="text" className="search__input"
                           placeholder="Book name"
                           onChange={e => setSearchValue(e.target.value)}
                           value={searchValue}
                           onKeyDown={(e) => e.key === 'Enter' ? handleSubmit : ''}
                    />
                    <button className="search__button"
                            disabled={!searchValue}
                            onClick={handleSubmit}
                    ><AiOutlineSearch className="ai_search"/></button>
                </div>
                <div className="search__select-wrap">
                    <CategoriesSelect setCategoryValue={setCategoryValue}/>
                    <SortedBySelect setSortedByValue={setSortedByValue}/>
                </div>
            </form>
        </div>
    );
};

export default Search;