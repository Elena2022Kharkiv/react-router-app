import { Routes, Route } from "react-router-dom";
import { Home, ActiveRest, Contacts, Countries, SingleCountry, PopularTours, BusTours} from "./pages";
import { Layout } from "./components/Layout";

import './scss/App.scss';

const App = () => { 
  const data = [
    { id: 1, text: 'Пропонуємо тури практично в будь-який куточок світу', img: ''},
    { id: 2, text: 'Зручна польотна програма, авіаквитки на чартерні та регулярні рейси', img: ''},
    { id: 3, text: 'Хороший вибір готелів, у які захочеться повернутися', img: ''},
    { id: 4, text: 'Великий список цікавих екскурсій', img: ''},
    { id: 5, text: 'Дбаємо про туристів 24/7', img: ''},
    { id: 6, text: 'Працюємо тільки з надійними партнерами, щоб пропонувати кращі тури для наших клієнтів.', img: ''}
  ]

  const slides = [
    { id: 1, img: '/img/singapur.jpg' },
    { id: 2, img: '/img/paris1.jpg' },
    { id: 3, img: '/img/greese3.jpg' },
    { id: 4, img: '/img/spain3.jpg' },
    { id: 5, img: '/img/india2.jpg' },
    { id: 6, img: '/img/egypt.jpg' },
    { id: 7, img: '/img/greese.jpg' },
  ];

  const popularTours = [
    { id: 1, country: 'Єгипет', img: '/img/egypt.jpg' },
    { id: 2, country: 'Франція', img: '/img/paris1.jpg' },
    { id: 3, country: 'Іспанія', img: '/img/spain3.jpg' },
    { id: 4, country: 'Греція', img: '/img/greese3.jpg'},
    { id: 5, country: 'Індія', img: '/img/india2.jpg' },
    { id: 6, country: 'Турція', img: '/img/turkey2.jpg' },
  ];

  const countries = [
    { id: 1, country: 'Єгипет', img: '/img/egypt.jpg' },
    { id: 2, country: 'Франція', img: '/img/paris1.jpg' },
    { id: 3, country: 'Іспанія', img: '/img/spain3.jpg' },
    { id: 4, country: 'Греція', img: '/img/greese3.jpg'},
    { id: 5, country: 'Індія', img: '/img/india2.jpg' },
    { id: 6, country: 'Турція', img: '/img/turkey2.jpg' },
  ];

  const busTours = [
    { id: 1, title: 'Париж', descr: 'text 1', img: '/img/paris.jpg' },
    { id: 2, title: 'Краків', descr: 'text 2', img: '/img/paris.jpg' },
    { id: 3, title: 'Венеція', descr: 'text 3', img: '/img/paris.jpg' },
    { id: 4, title: 'Барселона', descr: 'text 4', img: '/img/paris.jpg'},
    { id: 5, title: 'Дрезден', descr: 'text 5', img: '/img/paris.jpg' },
    { id: 6, title: 'Прага', descr: 'text 6', img: '/img/paris.jpg' },
    { id: 7, title: 'Рим', descr: 'text 7', img: '/img/paris.jpg' },
    { id: 8, title: 'Амстердам', descr: 'text 8', img: '/img/paris.jpg' },
  ];
  
  return (
    <div className="container">

      <Routes>

        <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home slides={ slides } data={ data } /> } />
            <Route path="popular" element={ <PopularTours popularTours={ popularTours } /> } /> 
            <Route path="popular/:id" element={ <SingleCountry countries={ countries }/> } /> 

            <Route path="busTours" element={ <BusTours busTours={ busTours } /> } />
            <Route path="countries" element={ <Countries /> } />
            <Route path="activeRest" element={ <ActiveRest /> } />
            <Route path="contacts" element={ <Contacts /> } />
        </Route>
        
      </Routes>   
    </div>
 
  )
}  

export default App;
