import { Button } from "@material-ui/core";
import { map } from "lodash";
import React from "react";
import { useHistory } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";

const HomePage = () => {
  const history = useHistory();
  const { data, loading } = useFetchUsers();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>HomePage</h1>
      {map(data.allUsers, (u) => (
        <p>{u.username}</p>
      ))}
      <Button onClick={() => history.push("/login")}>login</Button>
    </>
  );
};

export default HomePage;
