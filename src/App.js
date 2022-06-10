import "./App.css";
import CardCarousel from "./components/Carousel";
import React from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

//add fetch api here that way we can use context instead of raising up
//remove from card and carousel, bring in usestate.

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
      <NavBar />
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
