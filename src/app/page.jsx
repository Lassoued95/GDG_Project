"use client";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Home/Home";
import Product from "./components/product/Product";
import Bag from "./components/product/Bag";
import Hoodie from "./components/product/Hoodie";
import Jacket from "./components/product/Jacket";
import Shoes from "./components/product/Shoes";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Pantalon from "./Components/product/Pantalon";  
import Cap from "./components/product/Cap";
import Glasses from "./components/product/Glasses";
import Short from "./components/product/Short";
import Promo from "./Components/product/promo";
import { CartProvider } from "./context/cartContext";
import Product_Details from "./Components/product/Product_Details.jsx";
import CartPage from "./Components/product/CartPage";
import ContactForm from "./Components/Contact/ContactForm";
import Confirmation from "./Components/Confirmation/ConfirmationOrder";
import Demand from "./Components/Demand/Demand";
// Component to wrap Routes and apply conditional footer styles
const MainContent = () => {
    const location = useLocation(); 
    const isCartPage = location.pathname === "/product/CartPage"; 

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<><HomePage /><Product /></>} />
                <Route path="/order-sammuray" element={<Promo />} />
                <Route path="/product/bag" element={<Bag />} />
                <Route path="/product/hoodie" element={<Hoodie />} />
                <Route path="/product/jacket" element={<Jacket />} />
                <Route path="/product/shoes" element={<Shoes />} />
                <Route path="/product/pants" element={<Pantalon />} />
                <Route path="/product/cap" element={<Cap />} />
                <Route path="/product/glasses" element={<Glasses />} />
                <Route path="/product/shorts" element={<Short />} />
                <Route path="/product/bag/:id" element={<Product_Details />} />
                <Route path="/product/shoes/:id" element={<Product_Details />} />
                <Route path="/product/jacket/:id" element={<Product_Details />} />
                <Route path="/product/hoodie/:id" element={<Product_Details />} />
                <Route path="/product/cap/:id" element={<Product_Details />} />
                <Route path="/product/pants/:id" element={<Product_Details />} />
                <Route path="/product/glasses/:id" element={<Product_Details />} />
                <Route path="/product/short/:id" element={<Product_Details />} />
                <Route path="/product/promo/:id" element={<Product_Details />} />
                <Route path="/product/CartPage" element={<CartPage />} />
                <Route path="/Contact/ContactForm" element={<ContactForm />} />
                <Route path="/Confirmation/ConfiramtionOrder" element={<Confirmation/>}/>
                <Route path="/Confirmation/Confirmation" element={<ContactForm/>}/>
                <Route path="/Demand/Demand" element={<Demand/>}/>
            </Routes>
            <Footer className={isCartPage ? "absolute bottom-0 left-0 w-full" : ""} />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <CartProvider>
                <MainContent />
            </CartProvider>
        </Router>
    );
};

export default App;
