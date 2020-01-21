import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "./style.css";
import { getTasks } from "../../actions/tasks";
import { conectContext } from "../../TaskContext/conectContext";
import TasksList from "../../components/TasksList";
import SortTask from "../../components/SortTask";

const Home = conectContext(props => {
  const { tasks, getTasks, page, taskLenght } = props;
  const [sortState, setSortState] = useState(false);
  const [tasksList, setList] = useState({});
  const dispatch = new useDispatch();

  const setTasksList = list => {
    setList(list);
  };
  useEffect(() => {
    if (tasks[page]) setTasksList({ [`${+page}`]: tasks[page] });
    else getTasks({ ...props, setTasksList: setTasksList });
  }, [sortState]);
  const sortStateEdit = sort => {
    if (sort !== "page") dispatch({ type: "CLEAR_TASK", payload: {} });
    setSortState(!sortState);
  };
  return (
    <div className={styles.box}>
      {<h1>Home page tasks</h1>}
      <SortTask sortStateEdit={sortStateEdit} />
      <div className={styles.boxTasks}>
        <h3>
          Page: {page} page of {taskLenght}
        </h3>
        <TasksList tasksList={tasksList} />
      </div>
    </div>
  );
});

const mapStateToProps = store => ({
  tasks: store.tasks
});
export default connect(mapStateToProps, { getTasks })(Home);
