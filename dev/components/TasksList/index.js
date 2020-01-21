import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import TaskItem from "../TaskItem";
import styles from "./style.css";
import { conectContext } from "../../TaskContext/conectContext";

const TasksList = conectContext(({ tasksList, userActive, page }) => {
  return (
    <>
      <ul className={styles.list}>
        {tasksList[page]?tasksList[page].map(item => {
          if (item.id)
            return (
              <TaskItem key={item.id} item={item} userActive={userActive} />
            );
        }):''}
      </ul>
    </>
  );
});

const mapStateToProps = store => ({
  tasks: store.tasks
});

export default connect(mapStateToProps)(TasksList);
