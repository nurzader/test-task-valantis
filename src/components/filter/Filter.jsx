import React, {useState} from 'react';
import {SearchIcon} from '../../assets/icons';
import './filter.scss';

const Filter = () => {
    const [selected, setSelected] = useState('product');
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeSelect = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className="filter">
            <p className="filter__label">Фильтрация по:</p>
            <select value={selected} onChange={onChangeSelect} className="filter__popup">
                <option value="product">названию</option>
                <option value="price">цене</option>
                <option value="brand">бренду</option>
            </select>
            <form className="filter__search">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter__search-input"
                />
                <button>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default Filter;
