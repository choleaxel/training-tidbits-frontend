import "./App.css";
import CardCarousel from "./components/Carousel";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h2>"Learning in little bits"</h2>
      </header>
      <div>
        <CardCarousel />
      </div>
    </div>
  );
}

export default App;

//url: https://training-tidbits-db.web.app
