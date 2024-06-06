import { useState, useEffect } from "react";
import { getSum } from "../utils/functions";
import { useGetCartQuery, useAddCartMutation } from './../redux/cartApi';
import { useLocalStorage } from "./../hooks/useLocalStorage";

// import { useGetCartQuery, useAddCartMutation } from './redux/cartApi';
import "./../scss/Cart.scss";

export const Cart = ({ toggleShowCart }) => {
  const [ dataLocalStorage, setDataLocalStorage ] = useLocalStorage('cart', []);
    const { data: cartData = [] } = useGetCartQuery();
    // console.log(cartData); 
    const hide = (cartData.length === 0) ? "hide" : '';

    const addHandler = (e) => {
      console.log(e.target.dataset.index);
      const index = e.target.dataset.index;
      const buyTour = cartData.filter(tour => tour.id == index);
      console.log(buyTour);
      console.log(buyTour[0].quantity);
  }

    const minusHandler = (e) => {
      console.log(e.target.dataset.index);
      const index = e.target.dataset.index;
      const buyTour = cartData.filter(tour => tour.id == index);
      console.log(buyTour[0].quantity);
  }
 
    const delProductHandler = (e) => {
        console.log(e.target);

        const delTourId = e.target.dataset.index;
        console.log(delTourId);

        const newData = cartData.filter(item => item.id !== delTourId)
        console.log(newData); 

        setDataLocalStorage('cart', newData); 
        localStorage.clear();
        
    }

    return (
      <div className="cart">
        <div className="cart__container">  
          <div className="cart__close" onClick={ toggleShowCart }>            
              <img className="cart__close-img" 
              src={process.env.PUBLIC_URL + '/img/close_icon.png'} alt="close"
              />
          </div>
          { (cartData.length === 0) &&
            <div className="cart__empty">                        
              <img className="cart__img" 
                src={process.env.PUBLIC_URL + '/img/cart-img.png'} alt="cart"
              />
              <p className="cart__empty-text">Кошик порожній</p>
            </div>
          }

          <div className={`cart-list ${hide}`}>  
            <h2 className="cart-list__title">Кошик</h2>   
            <ul className="cart-list__content"> 
              {
                cartData.map(product => 
                  <li className="cart-list__item" key={ product.id }>

                    <div className="cart-list__img">
                      <img src={process.env.PUBLIC_URL + product.img } alt="tour" />
                    </div>
                    <div className="cart-list__title-tour"> 
                        { product.title }                         
                        <p className="cart-list__price-tour"> { product.price } грн</p>
                    </div>
                    <div className="cart-list__quantity">
                        <div className="cart-list__increment" 
                          data-index={ product.id }
                          onClick={(e) => addHandler(e)}
                        >+
                        </div>
                        <div>{ product.quantity }</div>   
                        <div className="cart-list__decrement"
                          data-index={ product.id }
                          onClick={(e) => minusHandler(e)}
                        >-
                        </div>
                    </div>
                    <div 
                      className="cart-list__btn-del"
                      data-index={ product.id }
                      onClick={(e) => delProductHandler(e)}
                    > 
                      <img className="cart-list__btn-del-img" 
                        src={process.env.PUBLIC_URL + '/img/close_icon.png'} alt="close"
                      />
                    </div>

                  </li>
                )
              }
            </ul>
            <div className="cart-list__total">
              <p className="cart-list__cart-sum">
                  Загальна сумма: { getSum( cartData ) } грн
              </p> 
            </div>
            <div className="cart-list__pay-btn">Сплатити</div>
          </div>
        </div>          
      </div>
    )
}
