import "./App.css";
import CardCarousel from "./components/Carousel";
import React from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMedication from "./components/Form";

export default function App() {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https://training-tidbits-db.web.app/medications")
      .then((res) => res.json())
      .then((data) => setMedications(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1 className="page-title">Training Tidbits </h1>
        </header>
        <nav>
          <NavBar />
        </nav>
        <body>
          <Routes>
            <Route path="/Form" element={<AddMedication />} />
            <Route path="/" />
          </Routes>
          <h2 className="title-learn">Learning in little bites</h2>

          <div>
            <CardCarousel medications={medications} />
          </div>
        </body>
        <footer>Coding with Chole</footer>
      </div>
    </BrowserRouter>
  );
}
//still no title
//I want 'home' to be the front page where the carousel is,
