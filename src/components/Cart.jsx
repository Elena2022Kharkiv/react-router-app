import { useState, useEffect } from "react";
import { getSumm } from "../utils/functions";
// import { useGetCartQuery, useAddCartMutation } from './redux/cartApi';
import "./../scss/Cart.scss";

export const Cart = (props) => {
    // const { showCart, toggleShowCart } = props;
    const { showCart, toggleShowCart, cartData } = props;
    // const { data: cartData = [] } = useGetCartQuery();
    console.log(cartData); 

    // const [ cartProductList, setCartProductList ] = useState([]);
    // const [ update, setUpData ] = useState(false);
    const hide = (cartData.length === 0) ? "hide" : '';
    const show = (cartData.length === 0) ? '' : "hide";

    // useEffect(() => {
    //     const data = localStorage.getItem('cart');
    //     const cartData = (data) ? JSON.parse(data) : [];
    //     setCartProductList(cartData);
    //     console.log(cartProductList); 
    // }, []);
  
    const delProductHandler = (e) => {
        console.log(e.target);
        // const delProdId = e.target.dataset.id;
        // console.log(delProdId);

        // const newData = cartProductList.filter(item => item.id !== delProdId)
        // console.log(newData);  
        
        // // localStorage.setItem('cart', JSON.stringify(newData));
        // setCartProductList(newData);
        // setUpData(true);

        // delProdHandler(newData);  
    }

    return (
      <div className="cart">
        <div className="cart__container">       
          <div className="cart__close" onClick={ toggleShowCart }>
            <img className="cart__close-img" 
              src={process.env.PUBLIC_URL + '/img/close_icon.png'} alt="close"
            />
          </div>
          <img className="cart__img" 
            src={process.env.PUBLIC_URL + '/img/cart-img.png'} alt="cart"
          />
          <p className={`cart__text ${show}`}>Кошик порожній</p>

          <div className={`cart-list ${hide}`}>
            <h2 className="cart-list__title">cart</h2>
              <ul className="cart-list__content"> 
                {
                  cartData.map(product => 
                    <li className="cart-list__item" key={ product.id }>

                      { product.title } &nbsp;  
                      <span>Price: { product.price }</span>
                      {/* <span>Price: { product.price } Category: { product.category }</span> */}
                      
                      <button 
                        className="cart-list__btn-del"
                        data-id={ product.id }
                        onClick={(e) => delProductHandler(e)}
                      > 
                        Del                                          
                      </button>

                    </li>
                  )
                }
              </ul>
              <div className="cart-list__total"> 
                  Total: { getSumm( cartData ) } грн
              </div>
          </div>
        </div>          
      </div>
    )
}
