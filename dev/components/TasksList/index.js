import React from "react";
import MyContext from "../../context";

import TaskItem from "../TaskItem";
import styles from "./style.css";

const TasksList = ({ tasksList, userActive, page }) => {
  return (
      <ul className={styles.list}>
        {tasksList[page]?tasksList[page].map(item => {
          if (item.id)
            return (
              <TaskItem key={item.id} item={item} userActive={userActive} />
            );
        }):''}
      </ul>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <TasksList {...context} {...props} />}
  </MyContext.Consumer>
);


