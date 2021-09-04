import React from "react";
import LoginPage from "./components/login/LoginPage";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />

        <Redirect to="/home" />
      </Switch>
      {/* <ToastMessage /> */}
    </>
  );
};

export default App;
