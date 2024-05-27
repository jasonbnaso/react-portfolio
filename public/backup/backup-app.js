import React from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { WordpressMod } from "../components/WordpressMod/WordpressMod";
import { ReactMod } from "../components/ReactMod/ReactMod";
import { PhaserMod } from "../components/PhaserMod/PhaserMod";
import { PokeMon } from "../components/ReactMod/PokeMon/PokeMon";


function App() {

  return (
    <>
      <main>
        <div className="custom-bg">
          <Router >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/WordpressMod" element={<WordpressMod />}></Route>
              <Route path="/ReactMod" element={<ReactMod />}></Route>
              <Route path="/PhaserMod" element={<PhaserMod />}></Route>
              <Route path="/ReactMod/PokeMon/PokeMon" element={<PokeMon />}></Route>
            </Routes>
          </Router>
        </ div>
      </main>
    </>
  );
}

export default App;