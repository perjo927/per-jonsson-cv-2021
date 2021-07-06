import React from "react";
import education from "../data/education.json";

export const Education = () => {
  return (
    <>
      {education.map(({ institute, period, title, description }) => {
        return (
          <div className="education" key={institute}>
            <h6>
              <span className="institute">{institute}</span>
              <span className="period">{period}</span>
            </h6>
            <h6 className="title">{title}</h6>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};
