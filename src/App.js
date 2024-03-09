import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./Pages/Shops";
import Shopcategory from "./Pages/Shopcategory";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Loginsignup from "./Pages/Loginsignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="/Mens" element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path="/Women" element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<Shopcategory banner={kids_banner} category="kid" />} />

        <Route path="/product" element={<Products />}>
            <Route path=":ProductId" element={<Products />} />
          </Route>
          {/* <Route path="/product/:id" element={<Products/>} /> */}
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Login" element={<Loginsignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
