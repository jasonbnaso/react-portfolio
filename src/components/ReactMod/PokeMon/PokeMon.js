import { useState, useEffect } from "react";
import axios from "axios";
import { Ability } from "./Ability/Ability";
import { UserLose } from "./UserLose/UserLose";
import { UserWin } from "./UserWin/UserWin";
import { Spinner } from "./Spinner/Spinner";
import { SearchBar } from "./SearchBar/SearchBar";
import { PokeLetterList } from "./PokeLetterList/PokeLetterList";
import { Replay } from "./Replay/Replay";
import { RandomLetter } from "./UtilityFunction/RandomLetter.js";
import logo from "./Imgs/pokemon-logo.png";
import "./PokeMon.scss";

const initialRandomLetter = RandomLetter();

export const PokeMon = () => {
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [randomLetter, setRandomLetter] = useState(initialRandomLetter);
  const [win, setWin] = useState(false);
  const [inPlay, setInPlay] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setLoading(true);

    const randomPoke = Math.floor(Math.random() * 800 + 1);

    const fetchRandomPoke = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomPoke}`
        );
        const data = response.data;
        setPoke(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchRandomPoke();
  }, [randomLetter]);
  // count the amount of pokes that start with the letter
  const handleSearch = async (term) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${term}`
      );
      const data = response.data;
      setPoke(data);
      setLoading(false);
      const userInputCheck = data.name.slice(0, 1);
      const randomPokeCheck = randomLetter.slice(0, 1);
      if (randomPokeCheck === userInputCheck) {
        setWin(true);
        let newScore = counter + 1;
        setCounter(newScore);
      } else {
        setWin(false);
        let newScore = counter - 1;
        setCounter(newScore);
      }
    } catch (err) {
      // console.log(err);
      setWin(false);
      setPoke(null);
      setLoading(false);
    }
    setInPlay(true);
  };
  const handleReplay = () => {
    setPoke(null);
    setLoading(false);
    setRandomLetter("");
    setWin(false);
    setInPlay(false);
    setRandomLetter(RandomLetter());
  };

  return (
    <main className="pokemon">
      <div className="container">
        <div className="row justify-content-center py-4">
          <div className="col-sm-10">
            <div className="card-wrapper card-border px-4 pb-4">
              <h3 className="text-center pt-4">SCORE: {counter}</h3>
              {!inPlay && (
                <div>
                  <h3 className="text-center py-4">
                    Try to name a{" "}
                    <img className="logo" src={logo} alt="Pokemon Logo" />{" "}
                    starting with the letter
                  </h3>
                  <hr />
                  <h3 className="random-poke text-center">{randomLetter}</h3>
                  <hr />
                  <PokeLetterList randomLetter={randomLetter} />

                  <SearchBar onSubmit={handleSearch} />

                  <p className="text-center py-3 ">
                    Under is a random Pokemon that may help your guess...but
                    it's a 1 in a gazillion chance
                  </p>
                </div>
              )}
              <hr />
              {!win && inPlay && <UserLose randomLetter={randomLetter} />}

              {loading && <Spinner />}
              {poke && (
                <div key={poke.name} className="fade-in">
                  {poke && inPlay && !win && (
                    <h4 className="text-center">Heres the poke you named</h4>
                  )}
                  {win && inPlay && <UserWin />}
                  <div className="poke-name d-flex justify-content-around">
                    <h3>{poke.name}</h3>
                    <p className="hitpoints">{poke.base_experience} HP</p>
                  </div>
                  <div className="img-wrapper d-flex justify-content-center">
                    <img
                      className="poke-img"
                      src={poke.sprites.front_default}
                      alt={poke.name}
                    />
                  </div>
                  <div className="banner d-flex justify-content-around p-3">
                    <p>Pokeman</p>
                    {poke.types.map((type) => {
                      return <p key={type.type.name}>{type.type.name}</p>;
                    })}
                    <p>Length: {poke.height}"</p>
                    <p>Weight: {poke.weight}lbs.</p>
                  </div>
                  {poke.abilities.map((ability) => {
                    return (
                      <Ability
                        key={ability.slot}
                        abilityUrl={ability.ability.url}
                      />
                    );
                  })}
                </div>
              )}
              {inPlay && <Replay handleReplay={handleReplay} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
