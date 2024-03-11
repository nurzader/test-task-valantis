import React, {useEffect, useState} from 'react';
import ButtonLink from '../buttonLink/ButtonLink';
import ProductList from '../productList/ProductList';
import useJewelryService from '../../services/JewelryService';
import {Spinner} from '../../assets/icons';
import './homeCatalog.scss';

const HomeCatalog = () => {
    const [products, setProducts] = useState([]);
    const offset = 0;
    const limit = 4;

    const {loading, clearError, getIds, getItems} = useJewelryService();

    let retryCount = 0;
    const MAX_RETRY_COUNT = 5;

    useEffect(() => {
        onRequest();
    }, [offset]);

    const onRequest = () => {
        getIds(offset, limit)
            .then((res) => getItems(res))
            .then((items) => {
                const uniqueItems = removeDuplicates(items, 'id');

                setProducts(uniqueItems);
                retryCount = 0;
            })
            .catch((error) => {
                console.error('Произошла ошибка при загрузке данных.', error);

                retryRequest();
            });
    };

    const retryRequest = async () => {
        if (retryCount > MAX_RETRY_COUNT) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        clearError();
        onRequest();
        retryCount++;
    };

    const removeDuplicates = (array, key) => {
        return array.filter(
            (item, index, arr) => index === arr.findIndex((t) => t[key] === item[key]),
        );
    };

    const spinner = loading ? <Spinner /> : null;

    return (
        <section className="home-catalog">
            <div className="container">
                <div className="home-catalog__head">
                    <h2 className="title black">Ювелирные украшения</h2>
                    <ButtonLink title="Смотреть еще" />
                </div>
                {spinner}
                <ProductList products={products} />
            </div>
        </section>
    );
};

export default HomeCatalog;
