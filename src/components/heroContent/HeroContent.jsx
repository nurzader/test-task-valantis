import React from 'react';
import banner from '../../assets/images/home-banner.jpg';
import earringsImg from '../../assets/images/earrings.jpg';
import ringsImg from '../../assets/images/rings.png';
import './heroContent.scss';
import ButtonLink from '../buttonLink/ButtonLink';

const HeroContent = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__row">
                    <div className="hero__banner">
                        <img src={banner} alt="banner" />
                    </div>
                    <div className="hero__img">
                        <img src={earringsImg} alt="earringsImg" />
                    </div>
                    <div className="hero__text">
                        <div className="hero__text-img">
                            <img src={ringsImg} alt="ringsImg" />
                        </div>
                        <h1 className="hero__text-title">Каталог Изделий</h1>
                        <p className="hero__text-desc">
                            Для великих моментов, мелких достижений и всего, что находится
                            посередине.
                        </p>
                        <ButtonLink title="Смотреть" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroContent;
