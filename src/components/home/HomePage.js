import { Button } from "@material-ui/core";
import { map } from "lodash";
import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLogout from "../../hooks/useLogout";
import CircularLoadingPage from "../shared/CircularLoadingPage";

const HomePage = () => {
  const logout = useLogout();
  const { data: userList, loading } = useFetchUsers();

  if (loading) {
    return <CircularLoadingPage />;
  }

  return (
    <>
      <h1>HomePage</h1>
      {map(userList?.allUsers, (u) => (
        <p key={u.username}>{u.username}</p>
      ))}
      <Button onClick={logout}>Log out</Button>
    </>
  );
};

export default HomePage;
