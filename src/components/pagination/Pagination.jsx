import React from 'react';
import {LeftIcon, RightIcon} from '../../assets/icons';
import './pagination.scss';

const Pagination = ({offset, setOffset, limit, isEmptyArray}) => {
    const handlePrevPage = () => {
        if (offset >= limit) {
            setOffset(offset - limit);
        }
    };

    const handleNextPage = () => {
        setOffset(offset + limit);
    };

    return (
        <section className="pagination">
            <button onClick={handlePrevPage} disabled={offset === 0} className="pagination__arrow">
                <LeftIcon />
                <span>Назад</span>
            </button>
            <button onClick={handleNextPage} className="pagination__arrow" disabled={isEmptyArray}>
                <span>Вперёд</span>
                <RightIcon />
            </button>
        </section>
    );
};

export default Pagination;
