import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserLose.scss";

export const UserLose = ({ randomLetter }) => {
  console.log("randomLetter", randomLetter);
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

  return (
    <div className="wrong-answer py-3">
      <h2 className="text-center">Sorry your search resulted a miss</h2>
      <h4 className="text-center">
        Here is a list of some you could have guessed
      </h4>
      <ul className="filtered-pokes display-flex text-center p-5 mt-4">
        {filteredPokes}
      </ul>
    </div>
  );
};
