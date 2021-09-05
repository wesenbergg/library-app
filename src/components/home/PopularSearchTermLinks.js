import React from "react";

const searchTerms = [
  "historical fiction",
  "civil war",
  "Nashville",
  "mystery",
  "antebellum law",
  "antebellum medicine",
  "romance",
];

const PopularSearchTermLinks = () => {
  return (
    <>
      <h3>Popular search terms</h3>
      {searchTerms.map((e, i) => {
        return (
          <p key={i}>
            <a href="/home">{e}</a>
          </p>
        );
      })}
    </>
  );
};

export default PopularSearchTermLinks;
