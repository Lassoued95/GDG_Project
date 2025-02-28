"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BagData = [
    { id: 9, name: "Brasilia", image: "/image-bag/bag1.png",price:"69.9",description:"Le sac de sport Nike Academy Team présente une conception résistante pensée pour vous permettre d'organiser soigneusement vos affaires. Son compartiment principal comprend un grand espace de rangement, tandis que les nombreuses sangles vous permettent de porter votre équipement de différentes manières tout en bénéficiant d'un maximum de confort lorsque vous êtes en déplacement. ", category: "Men" },
    { id: 10, name: "Jordan Air Patrol", image: "/image-bag/bag2.png",price:"79.9",description:"Le sac de sport rigide Nike Academy Team présente une conception résistante conçue pour vous permettre de vous organiser. Le fond robuste protège votre équipement, tandis que ses nombreuses sangles vous permettent de le transporter de différentes façons, entre la maison et le stade. ", category: "Women" },
    { id: 11, name: "Nike Elemental", image: "/image-bag/bag3.png",price:"99.9",description:" Le sac à dos Nike est parfait pour vos entraînements ou pour vous rendre au travail. Le grand compartiment à zip vous permet de ranger vos chaussures ou vêtements de rechange pour la salle de sport, sans oublier vos livres et votre ordinateur portable pour l'école. Deux poches extérieures permettent de ranger et d'organiser appareils électroniques et petits objets en toute sécurité. Ce produit est fabriqué avec au moins 65 % de fibres de polyester recyclé.", category: "Kids" },
    { id: 12, name: "Jordan Velocity", image: "/image-bag/bag4.png",price:"59.9",description:"Le sac à dos Nike est parfait pour vos entraînements ou pour vous rendre au travail. Le grand compartiment à zip vous permet de ranger vos chaussures ou vêtements de rechange pour la salle de sport, sans oublier vos livres et votre ordinateur portable pour l'école. Deux poches extérieures permettent de ranger et d'organiser appareils électroniques et petits objets en toute sécurité. Ce produit est fabriqué avec au moins 65 % de fibres de polyester recyclé. ", category: "Men" },
    { id: 13, name: "Nike Heritage", image: "/image-bag/bag5.png",price:"119.9",description:" Le sac à dos Nike Academy Team t'offre un espace de rangement spacieux avec plein de poches. Les bretelles et le dos sont rembourrés, te permettant ainsi de transporter tes affaires confortablement.", category: "Men" },
    { id: 14, name: "Jordan Mini Backpack", image: "/image-bag/bag6.png",price:"129.9",description:"Le sac de sport rigide Nike Academy Team présente une conception résistante conçue pour vous permettre de vous organiser. Le fond robuste protège votre équipement, tandis que ses nombreuses sangles vous permettent de le transporter de différentes façons, entre la maison et le stade. ", category: "Women" },
    { id: 15, name: "Nike Tech", image: "/image-bag/bag7.png",price:"69.9",description:"Quelles aventures t'attendent aujourd'hui ? Les lettres duveteuses en forme de bulles apportent une touche fun à ce sac à dos classique. Fabriqué en polyester à tissage dense pour un maintien renforcé, son compartiment principal offre suffisamment d'espace pour tout ton équipement. La poche avant à zip permet de ranger tes snacks préférés et tes petits objets essentiels en toute sécurité. Les bretelles rembourrées s'ajustent pour plus de confort. La poche latérale est parfaite pour une bouteille d'eau. ", category: "Kids" },
    { id: 16, name: "Jordan Crossbody", image: "/image-bag/bag8.png",price:"89.9",description:" Le sac de sport Nike Brasilia vous permet de conserver tout votre équipement de training à portée de main. Le compartiment latéral permet de ranger vos chaussures séparément, tandis que les poches intérieures et extérieures vous aident à organiser soigneusement vos affaires. Ce produit est fabriqué avec au moins 65 % de fibres de polyester recyclé.", category: "Men" },
];

function Bag() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterGender, setFilterGender] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleGenderFilter = (gender) => {
        setFilterGender(gender);
    };

    const filteredBags = BagData.filter((bag) => {
        const matchesSearch = bag.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGender = filterGender ? bag.category === filterGender : true;
        return matchesSearch && matchesGender;
    });

    return (
        <>
            <div id="prod">
                <div className="mb-5 mt-3">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="p-2 border rounded-lg w-full"
                    />
                </div>

                <div className="flex space-x-4 mb-5">
                    <button
                        onClick={() => handleGenderFilter("")}
                        className={`p-2 px-4 rounded-lg ${filterGender === "" ? "bg-black text-white" : "bg-gray-300"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleGenderFilter("Men")}
                        className={`p-2 px-4 rounded-lg ${filterGender === "Men" ? "bg-black text-white" : "bg-gray-300"}`}
                    >
                        Men
                    </button>
                    <button
                        onClick={() => handleGenderFilter("Women")}
                        className={`p-2 px-4 rounded-lg ${filterGender === "Women" ? "bg-black text-white" : "bg-gray-300"}`}
                    >
                        Women
                    </button>
                    <button
                        onClick={() => handleGenderFilter("Kids")}
                        className={`p-2 px-4 rounded-lg ${filterGender === "Kids" ? "bg-black text-white" : "bg-gray-300"}`}
                    >
                        Kids
                    </button>
                </div>

                <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-w-[300px] ">
            { filteredBags .map((bag) => (
              <div
                key={bag.id}
                className="relative group border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[300px] h-[550px]"
                onClick={() => navigate(`/product/bag/${bag.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg ">
                  <img src={bag.image} className="w-full h-72 object-cover rounded-lg" alt={bag.name} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                    Click to see more
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-bold text-gray-800">{bag.name}</h1>
                <p className="text-gray-500 mt-2">{bag.category}</p>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{bag.description}</p>

               
              </div>
            ))}
          </div>
        </div>
            </div>
        </>
    );
}

export default Bag;
