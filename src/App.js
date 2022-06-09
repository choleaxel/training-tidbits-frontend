import "./App.css";
import CardCarousel from "./components/Carousel";
import React from "react";
import NavBar from "./components/NavBar";

//add fetch api here that way we can use context instead of raising up
//remove from card and carousel, bring in usestate.
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
