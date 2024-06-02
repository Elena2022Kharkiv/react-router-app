import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './../scss/SingleCountry.scss';

export const SingleCountry = ({ tours }) => {
    console.log( tours );

    const { id } = useParams();
    // const { countryId } = useParams;
    // console.log(id);

    return (
        <div className="country">
            <h1 className="country__title">Неповторна і яскрава Іспанія!</h1>
            <div className="country__img-block">
                <div className="country__img-item">
                    <img src={process.env.PUBLIC_URL + '/img/spain10.jpg'} alt="Spain"/>
                </div>
                <div className="country__img-item">
                    <img src={process.env.PUBLIC_URL + '/img/spain12.jpg'} alt="Spain"/>
                </div>
                <div className="country__img-item">
                    <img src={process.env.PUBLIC_URL + '/img/spain14.jpg'} alt="Spain"/>
                </div>
                <div className="country__img-item">
                    <img src={process.env.PUBLIC_URL + '/img/spain17.jpeg'} alt="Spain"/>
                </div>
            </div>
            <div className="country__descr-block">
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/spain20.jpg'} alt="Spain"/>
                </div>
                <div className="country__descr-item">
                    <h3>Кухня</h3>
                    <p>Іспанська кухня славиться смачними делікатесами, адже вона 
                        увібрала в себе найкращі традиції 17 різних регіонів. 
                        Страви іспанської кухні гострі, пікантні і дуже гарні на вигляд.</p>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/flamenco.jpg'} alt="Spain"/>
                </div>
                <div className="country__descr-item">
                    <h3>Культура</h3>
                </div>
                <div className="country__descr-item">
                    <h3>Пам`ятки</h3>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/spain13.jpg'} alt="Spain"/>
                </div>
                <div className="country__descr-item">
                    <h3>Дозвілля</h3>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/spain22.png'} alt="Spain"/>
                </div>
            </div>

        </div>
    );
};
