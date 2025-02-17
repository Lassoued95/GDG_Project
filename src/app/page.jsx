"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/about" element={<h1>À propos</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
