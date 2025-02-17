"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/Home";
import Product from "./components/product/Product";
import Bag from "./components/product/Bag";
import Hoodie from "./components/product/Hoodie";
import Jacket from "./components/product/Jacket";
import  Shoes  from "./components/product/Shoes";

const App = () => {
    return (
        <>
            <Router>

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
                    <Route path="/product/bag" element={<Bag/>} />
                    <Route path="/product/hoodie" element={<Hoodie/>} />
                    <Route path="/product/jacket" element={<Jacket/>} />
                    <Route path="/product/shoes" element={<Shoes/>} />
                 
                </Routes>
                
            </Router>

           

   
     
            
        </>
    );
};

export default App;

