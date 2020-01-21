import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import styles from "./style.css";
import MyContext from "../../context";
import { loginUser } from "../../actions/login";

const Authorization = ({ setUserActive, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(true);

  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setExist(true);
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };
  const setAdminToken = token => {
    if (token) {
      setUserActive(username, password);
      setToken(token);
      clearForm();
      return home();
    } else setExist(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      setAdminToken: setAdminToken
    };
    if (username != "" && password != "") {
      loginUser(data);
    }
  };
  const clearForm = () => {
    setUsername("");
    setPassword("");
  };
  return (
    <div className={styles.box0}>
      <div className={styles.box}>
        <h1>Authorization</h1>
        <form
          className={`${styles.form} ${styles.type ? styles.type : ""}`}
          onSubmit={handleSubmit}
        >
          {!exist && username != "" && password != "" ? (
            <h3>Login or password do not match</h3>
          ) : (
            ""
          )}
          <label htmlFor="username"> Login </label>
          <small>{username != "" ? <br /> : "No login"}</small>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <small>{password != "" ? <br /> : "No password"}</small>
          <input
            type="password"
            name="password"
            id="password"
            minLength={3}
            maxLength={8}
            size="8"
            value={password}
            onChange={handleChange}
          ></input>
          <Button>LOGIN</Button>
        </form>
      </div>
    </div>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <Authorization {...context} {...props} />}
  </MyContext.Consumer>
);
