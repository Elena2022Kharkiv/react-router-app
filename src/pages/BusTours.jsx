import React from 'react';
import { useGetBusToursQuery } from './../redux/busToursApi';
import { useAddCartMutation  } from './../redux/cartApi';
import { useLocalStorage } from "./../hooks/useLocalStorage";

import "./../scss/BusTours.scss";

export const BusTours = () => {
    const { data: busTours = [], isLoading } = useGetBusToursQuery();
    const [ dataLocalStorage, setDataLocalStorage ] = useLocalStorage('cart', []);
    const [ addCart, { isError } ] = useAddCartMutation();
    // console.log(busTours, isLoading);
   
    const addCartHandler = async (e) => {
        console.log(e.target.dataset.index);
        const buyIndex = e.target.dataset.index;
        const buyBusTour = busTours.filter(tour => tour.id == buyIndex);
        console.log(buyBusTour[0].title);

        if (buyBusTour) {
            await addCart({ 
                id: buyBusTour[0].id, 
                title: buyBusTour[0].title,                
                img: buyBusTour[0].img,
                price: buyBusTour[0].price,
                quantity: 1,
            }).unwrap();    
        }
        console.log(isError);

        setDataLocalStorage([...dataLocalStorage, buyBusTour]); 
    }

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
                    isLoading 
                    ? <h3 className="busTours__loader">Loading ...</h3>
                    : busTours.map(tour => {
                        return(
                            <li key={tour.id} className="busTours__item">
                                <img className="busTours__img" 
                                    src={process.env.PUBLIC_URL + tour.img} alt="busTour" 
                                />
                                <div className="busTours__description">
                                    <h3 className="busTours__titleTour">{tour.title}</h3>
                                    <h4 className="busTours__descr busTours__descr_main">{tour.descr}</h4>
                                    <p className="busTours__descr">Без нічних переїздів</p>  
                                    <p className="busTours__descr">Тривалість туру {tour.days}</p>
                                    <p className="busTours__descr">Проїзд автобусом єврокласу</p>  
                                    <p className="busTours__descr">Проживання у готелях 3*</p>                                
                                    <p className="busTours__descr">Оглядові екскурсії</p>                                
                                    <p className="busTours__price">Вартість {tour.price} грн</p>
                                </div>
                                <button className="busTours__buy" data-index={ tour.id } onClick={(e) => addCartHandler(e) }>Замовити</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

