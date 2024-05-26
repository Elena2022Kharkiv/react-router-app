import React from 'react';
import './../scss/Home.scss';

export const Home = () => {
    return (
        <div>
            <div className="hero-block">
                <img src={process.env.PUBLIC_URL + '/img/singapur.jpg'} alt="Logo" />
            </div>

            <div>
                <h2>Рекомендуємо відвідати</h2>

                {/* <h3>Незабутній відпочинок / Незабутні подорожі</h3>
                <p>Комфортний переліт</p>
                <p>Зручна польотна програма</p>
                <p>Хороший вибір готелів, у які захочеться повернутися:</p>
                <p>Великий список цікавих екскурсій</p>
                <p>Надійні партнери</p> */}
            </div>

        </div>
    );
};