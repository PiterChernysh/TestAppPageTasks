import React from "react";
import { useHistory } from "react-router-dom";

import Title from "../Title";
import styles from "./style.css";
import Button from "../Button";
import MyContext from "../../context";

const Header = ({ rout, resetUserActive, userActive }) => {
  const history = useHistory();

  const setLogin = () => history.push("/login");
  const list = Object.keys(rout);
  const transition = page => {
    if (page != history.location.pathname) history.push(page);
  };
  const admin = JSON.stringify(userActive) === "{}" ? false : true;
  const createMenu = () => {
    return list.map(item => {
      return (
        <Button handleClick={() => transition(rout[item])} key={item}>
          {item}
        </Button>
      );
    });
  };
  return (
    <header>
      <Title />
      <nav className={styles.novigation}>
        {createMenu()}
        {admin ? (
          <Button handleClick={resetUserActive}>Log out</Button>
        ) : (
          <Button handleClick={setLogin}>Login</Button>
        )}
      </nav>
    </header>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <Header {...context} {...props} />}
  </MyContext.Consumer>
);
