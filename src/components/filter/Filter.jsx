import React, {useState} from 'react';
import {SearchIcon} from '../../assets/icons';
import './filter.scss';

const Filter = ({onFilter}) => {
    const [selected, setSelected] = useState('product');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchTerm.trim() === '') {
            return;
        }

        if (selected === 'price') {
            onFilter({price: Number(searchTerm)});
        } else if (selected === 'brand') {
            onFilter({brand: searchTerm});
        } else {
            onFilter({product: searchTerm});
        }
    };

    return (
        <div className="filter">
            <p className="filter__label">Фильтрация по:</p>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="filter__popup"
            >
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
                    placeholder={
                        selected === 'price'
                            ? 'Введите цену'
                            : selected === 'brand'
                            ? 'Введите бренд'
                            : 'Введите название'
                    }
                />
                <button onClick={handleSubmit}>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default Filter;
