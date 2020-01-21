import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import styles from "./style.css";

import Router from "./router";
import TaskContext from "./TaskContext";

const App = () => {
  return (
    <Provider store={store}>
      <TaskContext>
        <div className={styles.box}>
          <Router />
        </div>
      </TaskContext>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
