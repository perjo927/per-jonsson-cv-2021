import React from "react";
import about from "../data/about-me.json";

export const About = () => {
  return (
    <>
      {about.map((paragraph) => {
        return <p key={paragraph}>{paragraph}</p>;
      })}
    </>
  );
};
