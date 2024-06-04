import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ cartData }) => {
  // console.log(cartData);

  return (
    <div className="container">
      
      <Header cartData={ cartData } />      

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};