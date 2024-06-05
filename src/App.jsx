import { Routes, Route } from "react-router-dom";

import { useGetToursQuery } from './redux/dataApi';
import { useGetPostsQuery } from './redux/postsApi';

import { useLocalStorage } from './hooks/useLocalStorage';

import { Layout } from "./components/Layout";
import { Home, Countries, SingleCountry, PopularTours, SingleTour, BusTours, SearchTour, ActiveRest } from "./pages";
import './scss/App.scss';

const App = () => { 
  const { data: tours = [], isLoading } = useGetToursQuery();
  const { data: posts = [] } = useGetPostsQuery();
  // console.log(tours, isLoading);

  // const [ dataLocalStorage, setDataLocalStorage ] = useLocalStorage('cart', []);

  return (
    <div className="container">

      <Routes>

        <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home posts={ posts } /> } />
            <Route path="popular" element={ <PopularTours tours={ tours } /> } /> 
            <Route path="popular/:id" element={ <SingleTour tours={ tours }/> } />

            <Route path="busTours" element={ <BusTours /> } />

            <Route path="countries" element={ <Countries tours={ tours }/> } />
            <Route path="countries/:id" element={ <SingleCountry tours={ tours }/> } />

            <Route path="activeRest" element={ <ActiveRest /> } />
            <Route path="searchTour" element={ <SearchTour /> } />
            {/* <Route path="contacts" element={ <Contacts /> } /> */}
        </Route>
        
      </Routes>   
    </div>
 
  )
}  

export default App;
