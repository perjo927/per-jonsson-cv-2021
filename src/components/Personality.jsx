import React from "react";
import personal from "../data/personal-meter.json";

export const Personality = () => {
  return (
    <div className="personality">
      <p>A highly subjective evaluation of my personality.</p>
      <div className="temperaments">
        {personal.map((temperament) => {
          const [key] = Object.keys(temperament);
          const [value] = Object.values(temperament);

          return (
            <div className="temperament" key={key}>
              <div>{key}</div>
              <div className="bar">
                <div className="fill" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
