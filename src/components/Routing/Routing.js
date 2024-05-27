import React, { useState, useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "../Home/Home";
import { WordpressMod } from "../WordpressMod/WordpressMod";
import { ReactMod } from "../ReactMod/ReactMod";
import { PhaserMod } from "../PhaserMod/PhaserMod";
import { PokeMon } from "../ReactMod/PokeMon/PokeMon";
import { Grocery } from "../ReactMod/Grocery/Grocery";

export const Routing = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <div className="row custom-center">
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/wordpress" element={<WordpressMod />}></Route>
          <Route path="/react" element={<ReactMod />}></Route>
          <Route path="/phaser" element={<PhaserMod />}></Route>
          <Route path="/react/pokemon" element={<PokeMon />}></Route>
          <Route path="/react/grocery" element={<Grocery />}></Route>
        </Routes>
      </div>
    </div>
  );
};
