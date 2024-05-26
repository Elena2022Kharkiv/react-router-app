import { Routes, Route } from "react-router-dom";
import { Home, ActiveRest, Contacts, Countries, SingleCountry, PopularTours, BusTours} from "./pages";
import { Layout } from "./components/Layout";

import './scss/App.scss';

const App = () => { 

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
            <Route index element={ <Home /> } />
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
