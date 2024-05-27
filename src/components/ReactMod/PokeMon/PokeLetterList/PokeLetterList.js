import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./userLose.scss";

export const PokeLetterList = ({ randomLetter }) => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    const fetchPokeList = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=800`
        );
        const data = response.data;
        setPokes(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokeList();
  }, []);

  const filteredPokes = pokes
    .map((poke) => poke.name)
    .filter((pokeName) => pokeName.startsWith(randomLetter))
    .map((pokeName) => {
      return (
        <li
          className="filtered-poke d-inline mx-1 text-center poke-names-separator"
          key={pokeName}
        >
          {pokeName}{" "}
        </li>
      );
    });

  let arrayLength = filteredPokes.length;
  let points = 0;
  if (arrayLength < 5) {
    points = 100;
  } else if (arrayLength < 10) {
    points = 80;
  } else if (arrayLength < 20) {
    points = 60;
  } else if (arrayLength < 30) {
    points = 40;
  } else {
    points = 20;
  }
  // console.log("points", points);
  return (
    <div className="wrong-answer py-3">
      <div className="filtered-pokes display-flex text-center p-5 mt-4">
        <div>
          Name a Pokemon with the letter{" "}
          <span className="text-uppercase filtered-pokes-numbers">
            {randomLetter}
          </span>{" "}
          and get{" "}
          <span className="text-uppercase filtered-pokes-numbers">
            {points}
          </span>{" "}
          points!
        </div>
        <div>
          {" "}
          <span className="text-uppercase filtered-pokes-numbers">
            {filteredPokes.length}
          </span>{" "}
          Pokemon start with the letter{" "}
          <span className="text-uppercase filtered-pokes-numbers">
            {randomLetter}
          </span>
        </div>
      </div>
    </div>
  );
};
