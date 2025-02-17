"use client";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const navigate1=useNavigate()

   

    return (
        <div className="w-full flex justify-between items-center mt-0 bg-black text-slate-50 py-4 px-8 cursor-pointer">
            <a onClick={() => navigate("/")}>  

            <h1 className="text-2xl  select-none">L&B Bazaar</h1>
            </a>

           
            <nav className="flex space-x-8">
                <a onClick={() => navigate("/")}
                    href="#prod"
                    className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
                >
                    Home
                </a>
                <a onClick={() => navigate("/contact/Contact")}
                    href="#contact"
                    className="px-4 border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500"
                >
                    Contact
                </a>
                <button 
                    
                    className="relative border-b-1 border-transparent hover:border-b-2 transition duration-300 hover:border-yellow-500">
                    
                   
                </button>
            </nav>
        </div>
    );
}

export default Navbar;