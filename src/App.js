import React from "react";
import LoginPage from "./components/login/LoginPage";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./components/shared/PrivateRoute";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>

        <Redirect to="/login" />
      </Switch>
      {/* <ToastMessage /> */}
    </>
  );
};

export default App;
