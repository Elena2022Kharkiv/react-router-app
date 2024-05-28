import React from 'react';
import './../scss/Home.scss';
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Home = ({ slides, data }) => {
    // console.log(slides);
    const [ animate, setAnimate ] = useState(true);
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ direction, setDirection ] = useState('slide-right');

    useEffect(() => {
      if (!animate) return;

      const interval =  setInterval(() => {
        changeSlide();
      }, 3000)

      return () => {
        clearInterval(interval);
      };

    }, [currentIndex] )

    const changeSlide = () => {
      let nextIndex = currentIndex + 1;
      (nextIndex > slides.length - 1) && (nextIndex = 0);        
      setCurrentIndex(nextIndex);
      setDirection('slide-right');
    }


    const changeSlideLeft = () => {
      let nextIndex = currentIndex - 1;
      console.log(nextIndex);
      console.log(slides.length);
      (nextIndex < 0) && (nextIndex = slides.length - 1);
      // console.log(nextIndex);

      setAnimate(false);
      setCurrentIndex(nextIndex);
      setDirection('slide-left');
    }

    const changeSlideRight = () => {
      let nextIndex = currentIndex + 1;
      (nextIndex > slides.length - 1) && (nextIndex = 0);        
      // console.log(nextIndex);

      setAnimate(false);
      setCurrentIndex(nextIndex);
      setDirection('slide-right');
    }

    return (
      <div className="hero-block">

        <div className="slider">
            <TransitionGroup component="div" className="slider__items">
                  <CSSTransition                 
                    key={ slides[currentIndex].id }
                    // timeout={ 1000 }
                    timeout={{
                      enter: 1500,
                      exit: 3000
                    }}
                    classNames={ direction }
                  >
                      <img className="slider__img" src={ process.env.PUBLIC_URL + slides[currentIndex].img } alt="" />
                  </CSSTransition>
            </TransitionGroup >

                {/* <ul className="slider__items">
                    {slides.map(slide => {
                      return (
                        <li className="slider__item">
                            <img className="slider__img" src={process.env.PUBLIC_URL + slide.img} alt="" />
                            <img className="slider__img" src={process.env.PUBLIC_URL + '/img/singapur.jpg'} alt="" /> 
                        </li> 
                      )                                           
                    })}
                </ul> */}
            <div className="slider__text">
              <p>Обирайте та замовляйте тури</p>
              <p>до будь-якої країни світу</p>
            </div>

            <div className="slider__btns">                    
                {/* <div className="slider__btn-left" onClick={ () => setAnimate(prev => !prev) }> */}
                <div className="slider__btn-left" onClick={ changeSlideLeft }>
                    <img className="slider__btn-img" src={process.env.PUBLIC_URL + "img/arrow1.png"} alt="arrow" />
                </div>
                <div className="slider__btn-right" onClick={ changeSlideRight }>
                    <img className="slider__btn-img" src={process.env.PUBLIC_URL + "img/arrow2.png"} alt="arrow" />
                </div>                    
            </div>
        </div>



        <div className="about">
            <h2 className="about__title">
              Чому туристи обирають наше туристичне агентство<br/> DREAM TOUR?
            </h2>
            <ul className="about__items">
                {
                    data.map(item => {
                        return(
                            <li key={item.id} className="about__item">
                                <img src={process.env.PUBLIC_URL + item.img} alt="" />
                                {/* <img src={process.env.PUBLIC_URL + '/img/paris.jpg'} alt="" /> */}
                                <p className="about__descr">{item.text}</p>
                            </li>
                        )
                    })
                }
            </ul>

            {/* <h3>Незабутній відпочинок / Незабутні подорожі</h3>
            <p> Зручна польотна програма, авіаквитки на чартерні та регулярні рейси </p>
            <p> Комфортний переліт </p>
            <p> Хороший вибір готелів, у які захочеться повернутися </p>
            <p> Великий список цікавих екскурсій </p>
            <p> Автобусні тури з проїздом і проживанням у готелях </p>
            <p> Обирайте та замовляйте тури до будь-якої країни світу </p>
            <p> Надійні партнери</p> */}
        </div>

        <div>
            <h2>Рекомендуємо відвідати</h2>

        </div>

      </div>
    );
};