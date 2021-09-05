import { Box } from "@material-ui/core";
import { map } from "lodash";
import React from "react";

const newAddedBooks = [
  "Harry Potter 1",
  "Harry Potter 2",
  "Harry Potter 3",
  "Harry Potter 4",
  "Harry Potter 5",
  "Harry Potter 6",
  "Harry Potter 7",
];

const NewAddedBookList = () => {
  return (
    <>
      <h1>Recently Added books</h1>
      <Box style={{ height: 600, overflowY: "scroll" }}>
        {map(newAddedBooks, (e, i) => {
          return (
            <p
              key={i}
              style={{
                textAlign: "center",
                height: 100,
                border: "1px solid black",
                margin: "1rem",
              }}
            >
              {e}
            </p>
          );
        })}
      </Box>
    </>
  );
};

export default NewAddedBookList;
