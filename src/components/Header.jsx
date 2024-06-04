import { NavLink } from "react-router-dom";
import { useToggleCart } from "../hooks/useToggleCart";
import { Cart } from "./../components/Cart";
import "./../scss/Header.scss";

export const Header = ({ cartData }) => {
    const isActiveCallback = ({isActive}) => isActive ? 'menu__link menu__link_active' : 'menu__link';
    const { showCart, toggleShowCart } = useToggleCart(false);
    // console.log(cartData);

    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={process.env.PUBLIC_URL + '/img/photo_333.jpg'} alt="Logo" />
            </div>
            <nav className="menu">
              <ul className="menu__list">
         {/* Активный NavLink автоматически получает класс active (в отличие от Link)*/}
                <li className="menu__item">
                    <NavLink to="/" className={ isActiveCallback }>Про нас</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/popular" className={ isActiveCallback }>Популярні напрямки</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/busTours" className={ isActiveCallback }>Автобусні тури</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/countries" className={ isActiveCallback }>Країни</NavLink>
                </li>

                <li className="menu__item">
                    <NavLink to="/activeRest" className={ isActiveCallback }>Активний відпочинок</NavLink>
                </li>

                <li className="menu__item">
                    <NavLink to="/searchTour" className={ isActiveCallback }>Пошук туру</NavLink>
                </li>

                {/* <li className="menu__item">
                    <NavLink to="/contacts" className={ isActiveCallback }>Контакти</NavLink>
                </li> */}
              </ul>
            </nav>

            <div className="header__cart" onClick={ () => toggleShowCart() }>
                <img className="header__cart-icon" 
                    src={process.env.PUBLIC_URL + '/img/cart_icon.png'}
                    alt="shop-cart"
                />
            </div>
            {
                showCart && <Cart 
                    cartData={ cartData }
                    showCart={ showCart }
                    toggleShowCart={ toggleShowCart } 
                    // delProdHandler={ delProdHandler }
               />
            }
        </header>
    )    
}

// export default Header;