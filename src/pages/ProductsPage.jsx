import React, {useEffect, useState} from 'react';
import ProductList from '../components/productList/ProductList';
import useJewelryService from '../services/JewelryService';
import Pagination from '../components/pagination/Pagination';
import {Spinner} from '../assets/icons';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import {useLocation} from 'react-router-dom';

const ProductsPage = () => {
    const [offset, setOffset] = useState(0);
    const [products, setProducts] = useState([]);
    const limit = 50;
    const {pathname} = useLocation();

    const {loading, error, clearError, getIds, getItems} = useJewelryService();

    useEffect(() => {
        onRequest();
        window.scrollTo(0, 0);
    }, [offset, pathname]);

    const onRequest = () => {
        getIds(offset, limit)
            .then((res) => getItems(res))
            .then((items) => {
                const uniqueItems = removeDuplicates(items, 'id');

                setProducts(uniqueItems);
            })
            .catch((error) => {
                console.error('Произошла ошибка при загрузке данных.', error);

                retryRequest();
            });
    };

    const retryRequest = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        clearError();
        onRequest();
    };

    const removeDuplicates = (array, key) => {
        return array.filter(
            (item, index, arr) => index === arr.findIndex((t) => t[key] === item[key]),
        );
    };

    const isEmptyArray = products.length === 0;

    const errorMessage = !loading && error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading && !isEmptyArray ? <ProductList products={products} /> : null;
    const emptyArray =
        !loading && !error && isEmptyArray ? (
            <p className="emty-array">Нет данных для отображения.</p>
        ) : null;

    return (
        <div className="products-page">
            <div className="container">
                <section className="products-page__head">
                    <div className="products-page__img"></div>
                    <h2 className="title black">Ювелирные украшения</h2>
                    <p className="text">Lorem ipsum dolor sit amet.</p>
                </section>
                <hr className="hr" />
                {/* <Filter /> */}
                <section className="products-page__catalog">
                    {errorMessage}
                    {spinner}
                    {content}
                    {emptyArray}
                </section>
                <Pagination
                    offset={offset}
                    setOffset={setOffset}
                    limit={limit}
                    isEmptyArray={isEmptyArray}
                />
            </div>
        </div>
    );
};

export default ProductsPage;
