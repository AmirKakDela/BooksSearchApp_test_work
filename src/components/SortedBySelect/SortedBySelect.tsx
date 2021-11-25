import React, {ChangeEvent} from 'react';

type PropsType = {
    setSortedByValue: (sortedByValue: string) => void
};

const SortedBySelect: React.FC<PropsType> = (props) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setSortedByValue(e.target.value);
        e.preventDefault();
    }

    return (
        <label htmlFor="sorting" className="search__label">
            Sorting by
            <select name="sorting" className="search__select" onChange={(e) => handleChange(e)}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
        </label>
    );
};

export default SortedBySelect;