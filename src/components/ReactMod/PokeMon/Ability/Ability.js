import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ability.scss";

export const Ability = ({ abilityUrl }) => {
  const [ability, setAbility] = useState("");

  useEffect(() => {
    axios
      .get(abilityUrl)
      .then((res) => {
        const data = res.data;
        setAbility(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [abilityUrl]);

  return (
    <div className="abilty">
      {ability && (
        <ul>
          {ability.effect_entries.map((effect_entry) => {
            if (effect_entry.language.name === "en") {
              return (
                <li key={effect_entry.language.name}>{effect_entry.effect}</li>
              );
            }

            return undefined;
          })}
        </ul>
      )}
    </div>
  );
};
