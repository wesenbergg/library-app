import { Button, Grid, Tab, Tabs } from "@material-ui/core";
import { map } from "lodash";
import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLogout from "../../hooks/useLogout";
import CircularLoadingPage from "../shared/CircularLoadingPage";
import BookSearchInlineForm from "./BookSearchInlineForm";
import NewAddedBookList from "./NewAddedBookList";
import PopularGenres from "./PopularGenres";
import PopularSearchTermLinks from "./PopularSearchTermLinks";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const logout = useLogout();
  const { data: userList, loading } = useFetchUsers();

  if (loading) {
    return <CircularLoadingPage />;
  }

  return (
    <>
      <Tabs value={0} aria-label="simple tabs example">
        <Tab label="Kirjahaku" {...a11yProps(0)} />
        <Tab label="Karttahaku" {...a11yProps(1)} />
      </Tabs>
      <BookSearchInlineForm />
      <Grid container>
        <Grid item xs={6}>
          <PopularGenres />
        </Grid>
        <Grid item xs={4}>
          <NewAddedBookList />
        </Grid>
        <Grid item xs={2}>
          <PopularSearchTermLinks />
        </Grid>
      </Grid>
      {/* {map(userList?.allUsers, (u) => (
        <p key={u.username}>{u.username}</p>
      ))} */}
      <Button onClick={logout}>Log out</Button>
    </>
  );
};

export default HomePage;
