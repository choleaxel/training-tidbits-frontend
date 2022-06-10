import "./App.css";
import CardCarousel from "./components/Carousel";
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
    <div>
      <header>
        <h1 className="page-title">Training Tidbits </h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <body>
        <h2 className="title-learn">Learning in little bites</h2>

        <div>
          <CardCarousel medications={medications} />
        </div>
      </body>
      <footer>Coding with Chole</footer>
    </div>
  );
}
//still no title
