import React from 'react';
import {NavLink} from 'react-router-dom';
import {BagIcon, HeartIcon} from '../../assets/icons';
import logo from '../../assets/images/logo.png';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="row">
                        <div className="nav__logo">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <ul className="nav__list">
                            <li className="nav__list-item">
                                <NavLink to="/">Главная</NavLink>
                            </li>
                            <li className="nav__list-item">
                                <NavLink to="/products">Каталог</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__controls">
                        <div className="cart-icon">
                            <BagIcon />
                        </div>
                        <div className="like-icon">
                            <HeartIcon />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
