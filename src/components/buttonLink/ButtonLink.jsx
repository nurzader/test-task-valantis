import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRightIcon} from '../../assets/icons';
import './buttonLink.scss';

const ButtonLink = ({title}) => {
    return (
        <Link to="/products" className="link">
            <span className="link__title">{title}</span>
            <span>
                <ArrowRightIcon />
            </span>
        </Link>
    );
};

export default ButtonLink;
