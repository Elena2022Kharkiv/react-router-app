import React from 'react';
import { Link } from 'react-router-dom';
import "./../scss/Countries.scss";

export const Countries = ( props ) => {
    const { tours } = props;
    // console.log(tours);
    const countries = tours.filter(item => item.category === 2);
    console.log(countries);

    return (
        <div className="countries">
            <h2 className="countries__title">Країни</h2>

            <ul className="countries__items">
                {
                  countries.map(country => {
                    const id = country.id;
                    return(
                        <li key={ id } className="countries__item">
                            <Link to={ `${id}` }>
                                <h3 className="countries__titleTour">{country.title}</h3>
                                <div className="countries__item-img">
                                    <img src={process.env.PUBLIC_URL + country.img} alt="countries"/>
                                    {/* <img src={process.env.PUBLIC_URL + '/img/egypt.jpg'} />  */}
                                </div>
                            </Link>
                        </li>
                    )
                  })
                }
            </ul>

        </div>
    );
};

