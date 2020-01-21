import React from "react";

import styles from "./style.css";
import Form from "../../components/FormAddEditTask";

const Create = () => {
  return (
    <div className={styles.box}>
      <h1>Create task</h1>
      <Form type={"add"}/>
    </div>
  );
};

export default Create;
