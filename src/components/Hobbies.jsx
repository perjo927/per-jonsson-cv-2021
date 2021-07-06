import React from "react";
import hobbies from "../data/hobbies.json";

export const Hobbies = () => {
  return (
    <div className="hobbies">
      <p>Some of the things I love to do.</p>
      <ul>
        {hobbies.map((hobby) => {
          return (
            <li className="hobby" key={hobby}>
              {hobby}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
