import React from "react";
import contact from "../data/contact.json";

export const Contact = () => {
  return (
    <>
      {contact.map((record) => {
        return (
          <p className="contact" key={record}>
            {record}
          </p>
        );
      })}
    </>
  );
};
