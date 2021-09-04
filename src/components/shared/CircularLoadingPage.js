import { CircularProgress } from "@material-ui/core";
import React from "react";

// TODO: This loading page could have logo and title
const CircularLoadingPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
};

export default CircularLoadingPage;
