import "./App.css";
import CardCarousel from "./components/Carousel";
import AddMedication from "./components/Form";
import React from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

export default function App() {
  const [medications, setMedications] = useState();
  useEffect(() => {
    fetch("https://training-tidbits-db.web.app/medications")
      .then((res) => res.json())
      .then((data) => setMedications(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <header>
        <h1 className="main-header">Training Tidbits </h1>
        {/* <NavBar /> */}
      </header>
      <header>
        <h2 className="title-learn">Learning in little bits</h2>
      </header>
      <div>
        <CardCarousel medications={medications} />
      </div>
      <footer>Coding with Chole</footer>
    </div>
  );
}
