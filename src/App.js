import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@material-ui/core/CircularProgress";

import "./App.css";

//components
import Static from "./components/Static/Static";
import Nav from "./components/FbNavs/Nav";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import Loading from "./components/loading/Loading";
//Screens
import Feed from "./screens/Newsfeed";

//Actions
import { fetchPostsAction } from "./redux/actions/postAction";
import { checkUser } from "./redux/actions/authAction";
import * as types from "./redux/actions/types";
import { Error, WifiOff } from "@material-ui/icons";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <Router>
      {!isAuthenticated ? <Redirect to="/login" /> : <Redirect to="/" />}

      <div className="app">
        {loading && <Loading />}
        {error.message && (
          <>
            <Backdrop setShow={() => dispatch({ type: types.CLEAR_ERRORS })} />
            <Modal
              setShow={() => dispatch({ type: types.CLEAR_ERRORS })}
              top="20%"
              left="30%"
            >
              <Error />
              <h1>{error.message}</h1>
            </Modal>
          </>
        )}
        <Static />
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/register" exact>
          <RegisterScreen />
        </Route>
        <Route path="/" exact>
          <Nav />

          <div className="app-feed">
            <Feed />
          </div>
        </Route>
      </div>
    </Router>
  );
};

export default App;
