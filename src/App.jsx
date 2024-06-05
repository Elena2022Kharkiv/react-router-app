import { Routes, Route } from "react-router-dom";

import { useGetToursQuery } from './redux/dataApi';
import { useGetPostsQuery } from './redux/postsApi';
import { useGetBusToursQuery } from './redux/busToursApi';
// import { useGetUsersQuery, useAddUsersMutation } from './redux/usersApi';
import { useGetCartQuery, useAddCartMutation } from './redux/cartApi';

import { useLocalStorage } from './hooks/useLocalStorage';

import { Layout } from "./components/Layout";
import { Home, Countries, SingleCountry, PopularTours, SingleTour, BusTours, SearchTour, ActiveRest } from "./pages";
import './scss/App.scss';

const App = () => { 
  const { data: tours = [], isLoading } = useGetToursQuery();
  const { data: posts = [] } = useGetPostsQuery();
  const { data: busTours = [] } = useGetBusToursQuery();
  // const { data: users = [] } = useGetUsersQuery();
  const { data: cartData = [] } = useGetCartQuery();
  // console.log(tours, isLoading);
  // console.log(cartData);

  // const [ dataLocalStorage, setDataLocalStorage ] = useLocalStorage('cart', []);

  return (
    <div className="container">

      <Routes>

        <Route path="/" element={ <Layout cartData={ cartData } /> }>
            <Route index element={ <Home posts={ posts } /> } />
            <Route path="popular" element={ <PopularTours tours={ tours } /> } /> 
            <Route path="popular/:id" element={ <SingleTour tours={ tours }/> } />

            <Route path="busTours" element={ <BusTours busTours={ busTours } /> } />

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
