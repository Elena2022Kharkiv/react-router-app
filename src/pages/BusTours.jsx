import React from 'react';
import "./../scss/BusTours.scss";

export const BusTours = ( { busTours } ) => {
    
    return (
        <div className="busTours">
            <h2 className="busTours__title">Автобусні тури Європою</h2>
            <ul className="busTours__items">
                {
                    busTours.map(tour => {
                        return(
                            <li key={tour.id} className="busTours__item">
                                <h3 className="busTours__titleTour">{tour.title}</h3>
                                <img src={process.env.PUBLIC_URL + tour.img} alt="busTour" />
                                {/* <img src={process.env.PUBLIC_URL + '/img/paris.jpg'} alt="Logo" /> */}
                                <p className="busTours__descr">{tour.descr}</p>
                                <button className="busTours__buy">Замовити</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

