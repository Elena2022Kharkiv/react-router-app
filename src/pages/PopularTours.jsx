import React from 'react';
import { Link } from 'react-router-dom';
// import { useGetToursQuery } from './../redux/dataApi';
import "./../scss/PopularTours.scss";

export const PopularTours = ( { tours } ) => {
    const popularTours = tours.filter(item => item.category === 1);
    // console.log(popularTours);

    return (
        <div className="popularTours">
            <h2 className="popularTours__title">Популярні напрямки</h2>

            <ul className="popularTours__items">
                {
                  popularTours.map(tour => {
                    const id = tour.id;
                    return(
                        <li key={ id } className="popularTours__item">
                            <Link to={ `${id}` }>
                                <h3 className="popularTours__titleTour">{tour.title}</h3>
                                <div className="popularTours__item-img">
                                    <img src={process.env.PUBLIC_URL + tour.img} alt="popular tours"/>
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
