import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Navbar2 from "./components/layouts/Navbar2";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Question from './components/Question'

import data from "./data.json"
import UserProfile from "./components/UserProfile";

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  /*const hideLoader = () => {
    setLoadingState(false);
  };*/

  return (
    <Router>
      <Header showLoader={showLoader} />
      <Navbar2 showLoader={showLoader} />
      <Switch>
        {["ASDN", "Grafica", "Assembly", "OOP", "PSN", "Electrotehnica"].map(item => {
          return (
            <Route
              exact
              path={"/"+item}
              render={() => (
                <News
                  isLoading={isLoading}
                  data={data[item]}
                />
              )}
            />
          )
        })}
        <Route
          exact
          key="home"
          path="/"
          render={() => (
            <News
              isLoading={isLoading}
              data={[]}
            />
          )}
        />
        <Route
          path="/question/:id"
          component={Question}
        />
        <Route
          path="/user"
          component={UserProfile}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
