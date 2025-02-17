"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/Home";
import Product from "./components/product/Product";
import Bag from "./components/product/Bag";
import Hoodie from "./components/product/Hoodie";
import Jacket from "./components/product/Jacket";
import  Shoes  from "./components/product/Shoes";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Promo from "./Components/product/promo";
import { CartProvider } from "./Context/cartContext";


const App = () => {
    return (
        <>
            <Router>
            <CartProvider>

                    <Navbar/>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                             <HomePage />
                             <Product />
                            </>
                        } 
                    />
                    <Route path="/product/order-sammuray" element={<Promo />} />
                    <Route path="/product/bag" element={<Bag/>} />
                    <Route path="/product/hoodie" element={<Hoodie/>} />
                    <Route path="/product/jacket" element={<Jacket/>} />
                    <Route path="/product/shoes" element={<Shoes/>} />
                 
                </Routes>
                <Footer/>
                </CartProvider>
            </Router>

           

   
     
            
        </>
    );
};

export default App;

