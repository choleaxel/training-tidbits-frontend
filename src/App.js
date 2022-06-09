import "./App.css";
import CardCarousel from "./components/Carousel";
import MedicationCard from "./components/MedicationCard";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chole's Critter Clinic Training Tidbits</h1>
        <h2>"Learning in little bits"</h2>
      </header>
      <div>
        <CardCarousel />
        {/* <MedicationCard /> */}
      </div>
    </div>
  );
}

export default App;

//https://training-tidbits-db.web.app
