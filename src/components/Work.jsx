import React from "react";
import work from "../data/work-exp-full.json";

export const Work = () => {
  return (
    <>
      {work.map(({ company, period, title, description }) => {
        return (
          <div className="work" key={company}>
            <h6>
              <span className="company">{company}</span>
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
