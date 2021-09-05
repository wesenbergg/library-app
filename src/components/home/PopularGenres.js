import { Grid } from "@material-ui/core";
import React from "react";

const genres = [
  "Scifi",
  "Fantasy",
  "Thriller",
  "Action",
  "Horror",
  "Romance",
  "Childrens",
  "Autobiograph",
  "Art",
  "History",
  "Science and Technology",
  "LGBTQ+",
];

const PopularGenres = () => {
  return (
    <>
      <Grid container>
        {genres.map((e, i) => {
          return (
            <Grid item xs={4} key={i}>
              <p
                style={{
                  textAlign: "center",
                  height: 130,
                  border: "1px solid black",
                  margin: "1rem",
                }}
              >
                {e}
              </p>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PopularGenres;
