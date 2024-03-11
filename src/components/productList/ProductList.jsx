import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from '../../assets/images/product.jpg';
import hoverImage from '../../assets/images/product2.jpg';
import {BagIcon, HeartIcon} from '../../assets/icons';
import './productList.scss';

const ProductList = ({products}) => {
    return (
        <ul className="product-list">
            {products.map((item, i) => (
                <li key={i} className="product-list__item">
                    <Link to={`/products/${item.id}`}>
                        <div className="product-list__img">
                            <img className="default-image" src={defaultImage} alt="product" />
                            <img className="hover-image" src={hoverImage} alt="product" />
                        </div>
                        <div className="controls">
                            <div className="cart-icon">
                                <BagIcon />
                            </div>
                            <div className="like-icon">
                                <HeartIcon />
                            </div>
                        </div>
                        <p className="product-list__product">{item.product}</p>
                        <p className="product-list__price">{item.price} р.</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
