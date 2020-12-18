import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  //state
  //function changes state
  const [query, setQuery] = useState("");
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);

  let handler = (query) => {
    setQuery(query);
  };

  let userHandler = (user) => {
    setUser(user);
  };

  let loginHandler = (loginStatus) => {
    setLogin(loginStatus);
  };

  let logout = () => {
    setLogin(false);
  };

  return (
    <div className="App">
      <Router>
        <NavBar handler={handler} loginStatus={login} logout={logout} />
        <Route
          path="/"
          exact
          render={(
            props // props are history, location, match
          ) => <Home title="Home" {...props} query={query} />} // in this way you can pass your own props along with the router ones
        />
        <Route
          path="/details/:id"
          exact
          render={(props) => <ShowDetail title="Movie Details" {...props} />}
        />
        <Route
          path="/tvShow/"
          exact
          render={(props) => <TvShows title="TV SHOWS" {...props} />}
        />
        <Route
          path="/registration"
          exact
          render={(props) => <Registration {...props} handler={userHandler} />}
        />
        <Route
          path="/login"
          exact
          render={(props) => (
            <Login {...props} user={user} loginHandler={loginHandler} />
          )}
        />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
