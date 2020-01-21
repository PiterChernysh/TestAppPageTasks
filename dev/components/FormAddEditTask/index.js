import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { conectContext } from "../../TaskContext/conectContext";
import Button from "../Button";
import styles from "./style.css";
import { addTask, updateTask } from "../../actions/tasks";

const Form = conectContext(
  ({
    token,
    item,
    type,
    userActive,
    addTask,
    updateTask,
    editIsShowForm,
    setDataTaskItem
  }) => {
    const [username, setUsername] = useState(item ? item.username : "");
    const [email, setEmail] = useState(item ? item.email : "");
    const [textTask, setTextTask] = useState(item ? item.text : "");
    const [status, setStatus] = useState(item ? item.status : 0);
    const [isShowForm, setIsShowForm] = useState(true);
    const [validItem, setValidItem] = useState(true);
    const admin = JSON.stringify(userActive) === "{}" ? false : true;

    const dispatch = new useDispatch();
    const history = useHistory();
    const returnPage = () => {
      setTimeout(() => {
        history.push("/");
      }, 1000);
    };
    const goHome = () => {
      history.push("/");
    };
    const validText = str => {
      let regexp = /<(.*)>/g;
      let matchAll = str.match(regexp);
      if (matchAll) setValidItem(false);
      else return setValidItem(true);
    };
    const handleChange = e => {
      const { name, value } = e.target;
      validText(value);
      if (validItem)
        if (name === "username") {
          setUsername(value);
        } else if (name === "email") {
          setEmail(value);
        } else if (name === "status") {
          setStatus(value);
        } else setTextTask(value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        id: item ? item.id : 0,
        username: username,
        email: email,
        text: admin ? textTask + ".... Text changed by admin " : textTask,
        status: status,
        token: token
      };

      if (username != "" && email != "" && textTask != "") {
        if (type === "edit") {
          updateTask(data);
          setDataTaskItem(data);
          editIsShowForm();
        } else {
          addTask(data);
          setIsShowForm(false);
          returnPage();
        }
        clearForm();
        dispatch({ type: "CLEAR_TASK", payload: {} });
      }
    };

    const clearForm = () => {
      setUsername("");
      setEmail("");
      setTextTask("");
      setStatus(0);
    };

    return (
      <div className={styles.box0}>
        {isShowForm ? (
          <div className={styles.box}>
            {type === "edit" ? <h3>Edit task</h3> : <h3>Add task</h3>}
            {!validItem ? <h1>Invalid input characters {"<..>"}</h1> : ""}
            <form className={styles.form} onSubmit={handleSubmit}>
              {type === "edit" ? (
                <>
                  <h2>user: {username}</h2>email: {email}
                  <h2></h2>
                </>
              ) : (
                <>
                  <label htmlFor="username"> Username </label>
                  <small>{username != "" ? <br /> : "No username"}</small>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                  <label htmlFor="email"> Email </label>
                  <small>{email != "" ? <br /> : "No email"}</small>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </>
              )}
              <label htmlFor="textTask"> Text </label>
              <small>{textTask != "" ? <br /> : "No text"}</small>
              <input
                type="text"
                name="textTask"
                value={textTask}
                onChange={handleChange}
              />
              {type === "edit" ? (
                <>
                  {" "}
                  <label htmlFor="status">Status</label>
                  <small>{status != "" ? <br /> : "No status"}</small>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    value={status}
                    onChange={handleChange}
                  />
                </>
              ) : (
                ""
              )}
              <Button>{type === "edit" ? "Edit" : "Add"}</Button>
            </form>
            {type === "add" ? <Button handleClick={goHome}>Cancel</Button> : ""}
          </div>
        ) : (
          <h1>Loading complite!!!</h1>
        )}
      </div>
    );
  }
);

export default connect(null, { addTask, updateTask })(Form);
