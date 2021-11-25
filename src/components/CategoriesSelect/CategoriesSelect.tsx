import React, {ChangeEvent} from 'react';

type PropsType = {
    setCategoryValue: (categoryValue: string) => void
}

const CategoriesSelect: React.FC<PropsType> = (props) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        props.setCategoryValue(e.target.value);
    }

    return (
        <label htmlFor="categories" className="search__label">
            Categories
            <select name="categories" className="search__select" onChange={(e) => handleChange(e)}>
                <option value="">all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
            </select>
        </label>
    );
};

export default CategoriesSelect;