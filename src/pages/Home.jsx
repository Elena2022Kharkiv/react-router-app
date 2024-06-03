import React from 'react';
import './../scss/Home.scss';
import { Slider } from '../components/Slider';

export const Home = ({ posts }) => {

    return (
      <div className="home">

        < Slider />

        <div className="about">
            <h2 className="about__title">
              Чому туристи обирають наше туристичне агентство<br/> DREAM TOUR?
            </h2>
            <ul className="about__items">
                {
                    posts.map(item => {
                        return(
                            <li key={item.id} className="about__item">
                                <img className="about__img" src={process.env.PUBLIC_URL + item.img} alt="" />
                                <p className="about__descr">{item.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

        <div className="tour-operators">
            <h2 className="tour-operators__title">Туроператори</h2>
            <div className="tour-operators__logos">
              <img src={process.env.PUBLIC_URL + '/img/anex-tour.jpg'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/tez-tour.jpg'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/tui.png'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/pegas.jpg'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/join-up.png'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/accord-tour.webp'} alt="" />
              <img src={process.env.PUBLIC_URL + '/img/coral-travel.jpg'} alt="" />
            </div>
        </div>

        {/* <div>
            <h2>Рекомендуємо відвідати</h2>
        </div> */}

      </div>
    );
};