import React, { useState } from "react";
import MyContext from "../context";

const TasksContext = props => {
  const [userActive, setUserActive] = useState({});
  const [sort_field, setSort_field] = useState("id");
  const [sort_direction, setSort_direction] = useState("asc");
  const [page, setPage] = useState(1);
  const [taskLenght, setTaskLenght] = useState(1);
  const [token, setToken] = useState(false);
  const store = {
    userActive: userActive,
    sort_field: sort_field,
    sort_direction: sort_direction,
    page: page,
    taskLenght: taskLenght,
    token: token,
    sorting_field_list: ["id", "username", "email", "status"],
    sorting_direction_list: ["asc", "desc"],
    setUserActive: user => {
      setUserActive(user);
    },
    resetUserActive: () => {
      setUserActive({});
    },
    setSort_field: field => {
      setSort_field(field);
    },
    setSort_direction: direction => {
      setSort_direction(direction);
    },
    setPage: val => {
      if (val > 0 && val - 1 < taskLenght) setPage(val);
    },
    setTaskLenght: len => {
      setTaskLenght(len);
    },
    setToken: tok => {
      setToken(tok);
    }
  };
  return (
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
};

export default TasksContext;
