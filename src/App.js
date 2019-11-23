import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Navbar2 from "./components/layouts/Navbar2";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import PostPreview from "./components/layouts/PostPreview";
import CommentPreview from "./components/layouts/CommentPreview";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import data from "./data.json"

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  const hideLoader = () => {
    setLoadingState(false);
  };

  return (
    <Router>
      <Header showLoader={showLoader} />
      <Navbar2 showLoader={showLoader} />
      <Switch>
<<<<<<< HEAD
        <>
          <Route
            exact
            key="comment"
            path="/comment"
            render={() => (
              <CommentPreview/>
            )}
          />
          <Route
            exact
            key="post"
            path="/post"
            render={() => (
              <PostPreview/>
            )}
          />
          <Route
            exact
            key="home"
            path="/"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="shows"
            path="/shows"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="ask"
            path="/ask"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="jobs"
            path="/jobs"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />

          <Route
            key="top"
            path="/top"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="new"
            path="/new"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
          <Route
            key="best"
            path="/best"
            render={() => (
              <News
                isLoading={isLoading}
                hideLoader={hideLoader}
                showLoader={showLoader}
              />
            )}
          />
        </>
=======
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
>>>>>>> master
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
