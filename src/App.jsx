import { Routes, Route } from "react-router-dom";

import { useGetToursQuery } from './redux/dataApi';
// import { useGetPostsQuery } from './redux/postsApi';

import { Layout } from "./components/Layout";
import { Home, Countries, SingleCountry, PopularTours, SingleTour, BusTours, SearchTour, ActiveRest, Contacts} from "./pages";
import './scss/App.scss';

const App = () => { 
  const { data: tours = [], isLoading } = useGetToursQuery();
  console.log(tours, isLoading);

  // const { data: posts = [], isloading } = useGetPostsQuery();
  // console.log(posts, isLoading);

  const posts = [
    { id: 1, text: 'Пропонуємо тури практично в будь-який куточок світу', img: '/img/icon.png'},
    { id: 2, text: 'Зручна польотна програма, авіаквитки на чартерні та регулярні рейси', img: '/img/icon.png'},
    { id: 3, text: 'Хороший вибір готелів, у які захочеться повернутися', img: '/img/icon.png'},
    { id: 4, text: 'Оплата будь-яким зручним способом', img: '/img/icon.png'},
    { id: 5, text: 'Дбаємо про туристів 24/7', img: '/img/icon.png'},
    { id: 6, text: '15 років на ринку туристичних послуг', img: '/img/icon.png'},
    { id: 7, text: 'Великий список цікавих екскурсій', img: '/img/icon.png'},
    { id: 8, text: 'Працюємо тільки з надійними партнерами, щоб пропонувати кращі тури для наших клієнтів.', img: '/img/icon.png'},
  ]

  return (
    <div className="container">

      <Routes>

        <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home posts={ posts } /> } />
            <Route path="popular" element={ <PopularTours tours={ tours } /> } /> 
            <Route path="popular/:id" element={ <SingleTour tours={ tours }/> } />

            <Route path="busTours" element={ <BusTours tours={ tours } /> } />

            <Route path="countries" element={ <Countries tours={ tours }/> } />
            <Route path="countries/:id" element={ <SingleCountry tours={ tours }/> } />

            <Route path="activeRest" element={ <ActiveRest /> } />
            <Route path="searchTour" element={ <SearchTour /> } />
            <Route path="contacts" element={ <Contacts /> } />
        </Route>
        
      </Routes>   
    </div>
 
  )
}  

export default App;
