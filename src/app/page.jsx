"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/Home";
import Product from "./components/product/Product";
import Bag from "./components/product/Bag";
import Hoodie from "./components/product/Hoodie";
import Jacket from "./components/product/Jacket";
import  Shoes  from "./components/product/Shoes";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Pantalon from  "./Components/product/Pantalon";  
import Cap from "./components/product/Cap";
import Glasses from "./components/product/Glasses";
import Short from "./components/product/Short";
import Promo from "./Components/product/promo";
import {CartProvider} from "./Context/cartContext";
import Product_Details from "./Components/product/Product_Details.jsx";

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

                    <Route path="/order-sammuray" element={<Promo />} />
                    <Route path="/product/bag" element={<Bag/>} />
                    <Route path="/product/hoodie" element={<Hoodie/>} />
                    <Route path="/product/jacket" element={<Jacket/>} />
                    <Route path="/product/shoes" element={<Shoes/>} />
                    <Route  path="/product/pants" element={<Pantalon/>}/>
                    <Route  path="/product/cap" element={<Cap/>}/>
                    <Route  path="/product/glasses" element={<Glasses />}/>
                    <Route  path="/product/shorts" element={<Short/>}/>
                    <Route path="/product/bag/:id" element={<Product_Details />} />
                    <Route path="/product/shoes/:id" element={<Product_Details />} />
                    <Route path="/product/jacket/:id" element={<Product_Details />} />
                    <Route path="/product/hoodie/:id" element={<Product_Details />} />
                    <Route path="/product/cap/:id" element={<Product_Details  />} />
                    <Route path="/product/pants/:id" element={<Product_Details />} />
                    <Route path="/product/glasses/:id" element={<Product_Details />} />
                    <Route path="/product/short/:id" element={<Product_Details />} />
                    <Route path="/product/promo/:id" element={<Product_Details />} />



                 
                </Routes>
                <Footer/>
                </CartProvider>
            </Router>

           

   
     
            
        </>
    );
};

export default App;

