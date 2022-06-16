import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMedication from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState, createContext } from "react";

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
              <Route
                path="/Form"
                element={!user ? <Login /> : <AddMedication />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </body>
          <footer> © Coding with Chole</footer>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
//questions for nikki, background image opacity.
//login, google auth
//sort cards alphabetically, by name. .sort() added to the front or backend(to the getAll)?
//add more pages with other carousels and make home a page with dashboard of buttons?
//other carousels, vaccinations, preventives, common procedures?
// can only add meds when logged in, after which i can make delete button?
