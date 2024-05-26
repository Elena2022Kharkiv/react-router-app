import React from 'react';
import "./../scss/Countries.scss";

export const Countries = () => {
    return (
        <div className="countries">
            <h2 className="countries__title">Країни</h2>
            <div className="countries__items">
                <div className="countries__item">
                    <h3>Україна</h3>
                    <div className="countriess__item-img">
                        {/* <img src={process.env.PUBLIC_URL + '/img/ukraina.jpg'} alt="Logo" />  */}
                    </div>
                </div>
                <div className="countries__item">
                    <h3>Індія</h3>
                </div>
                <div className="countries__item">
                    <h3>Франція</h3>
                </div>
                <div className="countries__item">
                    <h3>Іспанія</h3>
                </div>
                <div className="countries__item">
                    <h3>Греція</h3>
                </div>
                <div className="countries__item">
                    <h3>Китай</h3>
                </div>
            </div>
        </div>
    );
};

