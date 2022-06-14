import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMedication from "./components/Form";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="whole-page">
        <header>
          <h1 className="page-title">Training Tidbits </h1>
        </header>
        <nav>
          <NavBar />
        </nav>
        <body>
          <h2 className="title-learn">Learning in little bites</h2>
          <Routes>
            <Route path="/Form" element={<AddMedication />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </body>
        <footer>Coding with Chole</footer>
      </div>
    </BrowserRouter>
  );
}
