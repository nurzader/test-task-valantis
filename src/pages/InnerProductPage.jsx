import React, {useState, useEffect} from 'react';
import useJewelryService from '../services/JewelryService';
import {useParams} from 'react-router-dom';
import {Spinner} from '../assets/icons';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import product1 from '../assets/images/product.jpg';
import product2 from '../assets/images/product2.jpg';

const InnerProductPage = () => {
    const [activeImage, setActiveImage] = useState(product1);
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const {loading, error, clearError, getItems} = useJewelryService();

    const stringId = String(id);

    useEffect(() => {
        onRequest();
    }, [stringId]);

    const onRequest = () => {
        getItems([stringId])
            .then((res) => setProduct(res[0]))
            .catch((error) => {
                console.error(
                    'Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже. ',
                    error,
                );

                retryRequest();
            });
    };

    const retryRequest = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        clearError();
        onRequest();
    };

    const isEmptyArray = product.length === 0;
    const errorMessage = !loading && error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const emptyArray =
        !loading && !error && isEmptyArray ? (
            <p className="emty-array">Нет данных для отображения.</p>
        ) : null;

    const handleImageClick = (newImage) => {
        setActiveImage(newImage);
    };

    return (
        <div className="container">
            {errorMessage}
            {spinner}
            {emptyArray}
            {!loading && !isEmptyArray && (
                <div className="product">
                    <div className="product__images">
                        <div className="product__images-main">
                            <img src={activeImage} alt="product-img" />
                        </div>
                        <div className="product__images-thumbnails">
                            <img
                                src={product1}
                                alt="thumbnail1"
                                className={activeImage === product1 ? 'active-thumbnail' : ''}
                                onClick={() => handleImageClick(product1)}
                            />
                            <img
                                src={product2}
                                alt="thumbnail2"
                                className={activeImage === product2 ? 'active-thumbnail' : ''}
                                onClick={() => handleImageClick(product2)}
                            />
                        </div>
                    </div>
                    <div className="product__details">
                        <h4 className="product__details-title">{product.product}</h4>

                        <p className="product__details-price">
                            {product.price} <span className="rub">р.</span>
                        </p>
                        {product.brand && (
                            <p className="product__details-brand">
                                Brand: <span className="brand">{product.brand}</span>
                            </p>
                        )}
                        <p className="product__details-id">
                            ID: <span className="id">{product.id}</span>
                        </p>
                        <button className="product__details-button" type="submit">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InnerProductPage;
