import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Error from "../components/Error";
import styles from "./style.css";
import Header from "../components/Header";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Rout = ({ user }) => {
  return (
    <div className={styles.box}>
      <Router>
        <Header
          rout={{
            Home: "/",
            Create: "/create"
          }}
        />
        <div className={styles.boxPages}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route path="/login" exact component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = store => ({ user: store.userActive });

export default connect(mapStateToProps)(Rout);
