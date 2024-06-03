import React from 'react';
import "./../scss/BusTours.scss";

export const BusTours = ( props ) => {
    const { busTours } = props;
    // console.log(tours);
    // const busTours = tours.filter(item => item.category === 3);
    // console.log(busTours);
    
    return (
        <div className="busTours">
            <div className="busTours__hero-block">
                <p className="busTours__hero-text">Автобусні тури – це простий
                    <br/>і доступний спосіб побачити світ.
                    <br/>Замовляй будь-який напрямок 
                    <br/>і на тебе чекатиме калейдоскоп емоцій!
                </p>
                <div className="busTours__hero-images">
                    <div className="busTours__hero-img busTours__hero-img_left">
                        <img src={process.env.PUBLIC_URL + './img/Colosseo.jpg'} alt="busTour" />
                    </div>
                    <div className="busTours__hero-img busTours__hero-img_top">
                        <img src={process.env.PUBLIC_URL + './img/sagrada-familiya2.jpg'} alt="busTour" />
                    </div>
                    <div className="busTours__hero-img busTours__hero-img_center">
                        <img src={process.env.PUBLIC_URL + './img/paris22.jpg'} alt="busTour" />
                    </div>
                    <div className="busTours__hero-img busTours__hero-img_bottom">
                        <img src={process.env.PUBLIC_URL + './img/spain12.jpg'} alt="busTour" />
                    </div>
                    <div className="busTours__hero-img busTours__hero-img_right">
                        <img src={process.env.PUBLIC_URL + './img/Pise.jpg'} alt="busTour" />
                    </div>
                </div>
            </div>
            
            <h2 className="busTours__title">Автобусні тури Європою</h2>

            <ul className="busTours__items">
                {
                    busTours.map(tour => {
                        return(
                            <li key={tour.id} className="busTours__item">
                                {/* <h3 className="busTours__titleTour">{tour.title}</h3> */}
                                <img className="busTours__img" 
                                    src={process.env.PUBLIC_URL + tour.img} alt="busTour" 
                                />
                                <h3 className="busTours__titleTour">{tour.title}</h3>
                                <p className="busTours__descr busTours__descr_main">{tour.descr}</p>
                                <p className="busTours__descr">Без нічних переїздів</p>  
                                <p className="busTours__descr">Тривалість туру {tour.days}</p>
                                <p className="busTours__descr">Проїзд автобусом єврокласу</p>  
                                <p className="busTours__descr">Проживання у готелях категорії 3*</p>                                
                                <p className="busTours__descr">Оглядові екскурсії</p>                                
                                <p className="busTours__descr">Вартість {tour.price} грн за 1 людину</p>
                                <button className="busTours__buy">Замовити</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

