import React, { useState } from "react";
import styles from "./style.css";
import MyContext from "../../context";

const SortField = ({ setSort_direction, sorting_direction_list, sortStateEdit }) => {
  const [state, setState] = useState("");
  const handleChange = event => {
    const val = event.target.value;
    setState(val);
    setSort_direction(val);
    sortStateEdit();
  };

  const handleSubmit = event => {
    alert("Your favorite flavor is: " + state.value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select
          className={styles.button}
          value={state.value}
          onChange={handleChange}
        >
          {sorting_direction_list.map(index => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};
export default props => (
  <MyContext.Consumer>
    {context => <SortField {...context} {...props} />}
  </MyContext.Consumer>
);
