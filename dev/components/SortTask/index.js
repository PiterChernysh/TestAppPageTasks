import React, { useState, useEffect } from "react";

import styles from "./style.css";
import MyContext from "../../context";
import Sort_field from "../SortFieldList/sort_field";
import Sort_direction from "../SortFieldList/sort_direction";
import Button from "../Button";

const SortTask = props => {
  const { page, setPage, sortStateEdit } = props;
  const editPage = type => {
    setPage(type === "-" ? page - 1 : page + 1);
    sortStateEdit("page");
  };
  return (
    <div className={styles.novigation}>
      <Sort_field sortStateEdit={sortStateEdit} />
      <Sort_direction sortStateEdit={sortStateEdit} />
      <Button theme="small" handleClick={() => editPage("-")}>
        Previous
      </Button>
      <a className={styles.boxPage}>{page}</a>
      <Button theme="small" handleClick={() => editPage("+")}>
        Next
      </Button>
    </div>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <SortTask {...context} {...props} />}
  </MyContext.Consumer>
);
