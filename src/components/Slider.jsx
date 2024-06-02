import React from 'react';
import './../scss/Slider.scss';
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Slider = () => {
    // console.log(slides);
    const [ animate, setAnimate ] = useState(true);     
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ direction, setDirection ] = useState('slide-right');

    const slides = [
      { id: 1, img: '/img/singapur.jpg' },
      { id: 2, img: '/img/paris1.jpg' },
      { id: 3, img: '/img/greese3.jpg' },
      { id: 4, img: '/img/spain3.jpg' },
      { id: 5, img: '/img/india3.jpg' },
      { id: 6, img: '/img/egypt.jpg' },
      { id: 7, img: '/img/greese.jpg' },
    ];  

    useEffect(() => {
      if (!animate) return; 

      const interval =  setInterval(() => {
        changeSlide(currentIndex + 1, 'slide-right');
      }, 3000)

      return () => {
        clearInterval(interval);
      };

    }, [currentIndex] )

    const changeSlide = (nextIndex, curDirection) => {
      // console.log(slides.length);
      (nextIndex < 0) && (nextIndex = slides.length - 1);
      (nextIndex > slides.length - 1) && (nextIndex = 0);      
      // console.log(nextIndex);
      setCurrentIndex(nextIndex);
      setDirection(curDirection);
    }

    return (
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

            <div className="slider__text">
              <p>Обирайте тури</p>
              <p>до будь-якої країни світу</p>
              <p>і насолоджуйтесь відпочинком!</p>
            </div>

            <div className="slider__btns">                    
                <div className="slider__btn-left" onClick={ () => changeSlide(currentIndex - 1, 'slide-left') }>
                    <img className="slider__btn-img" src={process.env.PUBLIC_URL + "img/arrow1.png"} alt="arrow" />
                </div>
                <div className="slider__btn-right" onClick={ () => changeSlide(currentIndex + 1, 'slide-right') }>
                    <img className="slider__btn-img" src={process.env.PUBLIC_URL + "img/arrow2.png"} alt="arrow" />
                </div>                    
            </div>
           
            <div className="slider__dots">
              {
                slides.map((slide, index) => {
                        return (
                          <span 
                            className={(index == currentIndex) ? "slider__dot slider__dot_active" : "slider__dot" } 
                            key={index}
                            onClick={ () => setCurrentIndex(index) }>
                          </span>
                        )                                           
                })
              }
            </div>

        </div>
    );
};