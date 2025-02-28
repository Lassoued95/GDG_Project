"use client";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const productsSh = [
  { id: 65, name: "Nike Club", image: "/image-short/short2.png", price:"69.9", category: "Men", description: "Pull on these Tech Fleece shorts for laid-back comfort..." },
  { id: 66, name: "Nike Sportswear Tech Fleece", image: "/image-short/short2.png", price:"79.", category: "Men", description: "Start off strong with shorts that are ready to ball..." },
  { id: 67, name: "Nike Fly", image: "/image-short/short3.png", price:"69.9", category: "Women", description: "Smooth feel and minimal fit made to keep up with your moves..." },
  { id: 68, name: "Nike Running Division", image: "/image-short/short4.png" ,price:"99.9",category :"Kids" , description:"Designed for running, training and yoga, these versatile shorts are built to handle those days when you need to shake up your exercise routine. Our sweat-wicking Form Shorts offer a smooth feel and minimal fit made to keep up with your moves, from tough dead lifts to sweaty hot yoga classes."},
  { id: 69, name: "Nike Stride ", image: "/image-short/short5.png", price:"89.9" ,category :"Kids", description:"Lightweight and breezy, these unlined Flow shorts from our Nike Club collection are built for all your warm-weather activities. The relaxed, above-the-knee fit makes them easy to style, so pull them on with a tee or hoodie and make your move." },
  { id: 70, name: "Nike ISPA", image: "/image-short/short6.png" , price:"119.9" ,category :"Kids", description:"Sporty and versatile, these woven shorts are made for easygoing daily comfort. The fit is designed to hit above-the-knee and feel relaxed through the seat and thighs to keep them from feeling restrictive, especially in warmer weather. Mesh lining helps you stay cool and comfy around town. Pair them up with a tee and your favorite Nike sneakers for a look that gets you out there looking and feeling great." },
  { id: 71, name: "Nike Icon", image: "/image-short/short7.png" , price:"99.9" ,category :"Women"  , description:"Designed for durability, these cargo shorts are made with heavyweight cotton canvas that stands up to routine wear. Spacious cargo pockets give you plenty of room to carry your essentials."},
  { id: 72, name: "Los Angeles Dodgers City ", image: "/image-short/short8.png" , price:"89.9" ,category :"Kids"  , description:"Move comfortably on and off the course in the Nike Dri-FIT Shorts. Stretchy fabric lets you line up your putts without restriction and a tacky waistband helps keep your shirt tucked in while you bend and swing."},
  
];

function Short() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const productRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleGenderFilter = (gender) => setFilterGender(gender);

  const filteredProducts = productsSh.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender ? product.category === filterGender : true;
    return matchesSearch && matchesGender;
  });

  return (
    <>
      <div id="prod" className="container mx-auto p-6">
        
        <div className="mb-5 mt-3">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 border rounded-lg w-full outline-none shadow focus:border-black"
          />
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => handleGenderFilter("")}
            className={`p-2 px-4 rounded-lg font-semibold ${filterGender === "" ? "bg-black text-white" : "bg-gray-300 text-gray-700"}`}
          >
            All
          </button>
          <button
            onClick={() => handleGenderFilter("Men")}
            className={`p-2 px-4 rounded-lg font-semibold ${filterGender === "Men" ? "bg-black text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Men
          </button>
          <button
            onClick={() => handleGenderFilter("Women")}
            className={`p-2 px-4 rounded-lg font-semibold ${filterGender === "Women" ? "bg-black text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Women
          </button>
          <button
            onClick={() => handleGenderFilter("Kids")}
            className={`p-2 px-4 rounded-lg font-semibold ${filterGender === "Kids" ? "bg-black text-white" : "bg-gray-300 text-gray-700"}`}
          >
            Kids
          </button>
        </div>

        <div className="w-full">
          <div ref={productRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/short/${product.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={product.image} className="w-full h-72 object-cover rounded-lg" alt={product.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{product.name}</h1>
                <h1 className="mt-4 text-xl font-bold text-gray-800">{product.price}{"$"}</h1>
                <p className="text-gray-500 mt-2">{product.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{product.description}</p>

              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Short;
