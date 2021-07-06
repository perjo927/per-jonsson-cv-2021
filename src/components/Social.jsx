import React from "react";
import social from "../data/social.json";

export const Social = () => {
  return (
    <>
      {social.map((link) => {
        return (
          <a
            className="social"
            key={link}
            href={`https://${link}`}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        );
      })}
    </>
  );
};
