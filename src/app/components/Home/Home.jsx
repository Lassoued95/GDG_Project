"use client";
import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    return (

      <>
       <img 
            src="image-home/aa-removebg-preview.png"
            className="ml-[55%] h-[55%] animate-shoes_anim"
          />

    

          {/* Promo Section */}
        <div className="bg-black text-center py-20 mt-[30%] h-[80vh] animate-zoomIn  overflow-x-hidden sm:mt-[-100%] md:mt-[-35%]" >


            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase mb-4 animate-font">
              Step Into Comfort and Style
            </h1>
            <p className="text-lg  text-gray-200 mb-6 animate-font sm:text-3xl ">
              Discover the latest collections designed for every adventure.
            </p>
            <button 
              onClick={() => navigate("/order-sammuray")}
              className="mt-4 bg-white text-yellow-400 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>

           <div>
            
          </div>
        

           </>
        
         

      );
    
};


export default HomePage;

