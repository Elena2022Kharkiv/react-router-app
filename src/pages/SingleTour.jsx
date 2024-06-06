import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './../scss/SingleCountry.scss';

export const SingleTour = ({ tours}) => {
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
                    <h3 className="country__descr-title">Кухня</h3>
                    <p className="country__descr-text">Іспанська кухня славиться смачними делікатесами, адже вона увібрала в себе найкращі традиції 17 різних регіонів. 
                        Страви іспанської кухні гострі, пікантні і дуже гарні на вигляд. Серед найвідоміших страв – паелья з морепродуктами, маленькі закуски тапас, холодний томатний суп гаспачо, традиційний десерт чуррос. </p>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/flamenco.jpg'} alt="Spain"/>
                </div>
                <div className="country__descr-item">
                    <h3 className="country__descr-title">Культура</h3>
                    <p className="country__descr-text">Культура Іспанії відображає багатовікову історію країни. Тут можна насолодитися пристрасними танцями фламенко, захоплюючими боями кориди та іспанськіми фестивалями, такими як Ла Томатіна і Сан-Фермін.</p>
                </div>
                <div className="country__descr-item">
                    <h3 className="country__descr-title">Пам`ятки</h3>
                    <p className="country__descr-text">Пам'ятки Іспанії славляться своїм різноманіттям і величчю. Творіння Гауді в Барселоні, грандіозні палаци Мадрида, стародавні фортеці Толедо, середньовічні мости Севільї та палац Альгамбра в Гранаді приваблюють тисячі туристів з усього світу.</p>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/spain13.jpg'} alt="Spain"/>
                </div>
                <div className="country__descr-item">
                    <h3 className="country__descr-title">Дозвілля</h3>
                    <p className="country__descr-text">Дозвілля в Іспанії пропонує безліч можливостей для кожного. Тут можна насолоджуватися теплим середземноморським сонцем на пляжах Коста-Брава, займатися водними видами спорту на Канарських островах або досліджувати гірські маршрути Піренеїв. </p>
                </div>
                <div className="country__descr-img">
                    <img src={process.env.PUBLIC_URL + '/img/spain22.png'} alt="Spain"/>
                </div>
            </div>

        </div>
    );
};
