import React from "react";
import skills from "../data/skills.json";

export const Skills = () => {
  return (
    <div className="skills">
      <p>
        Some of the techniques, languages and libraries I've worked with
        professionally.
      </p>
      <ul>
        {skills.map((skill) => {
          return (
            <li className="skill" key={skills}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
