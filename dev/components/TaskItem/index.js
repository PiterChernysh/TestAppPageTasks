import React, { useState } from "react";

import styles from "./style.css";
import Button from "../Button";
import Icon from "../Icon";
import FormEdit from "../FormAddEditTask";

const Item = ({ item, userActive }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [text, setText] = useState(item?item.text:"");
  const [status, setStatus] = useState(item?item.status:"");

  const setDataTaskItem = (data)=>{
    setText(data.text);
    setStatus(data.status);
  }

  const admin = JSON.stringify(userActive) === "{}" ? false : true;
  const editIsShowForm = () => {
    setIsShowForm(!isShowForm);
  };
  return (
    <>
      <li className={styles.item}>
        <div className={styles.item__title}>
          {admin ? (
            <>
              <header className={styles.item__head}>
                <h3 className={styles.item__title}>Task </h3>
                <div className={styles.item__action}>
                  <Button theme="small" handleClick={editIsShowForm}>
                    {!isShowForm ? (
                      <Icon name="edit" />
                    ) : (
                      <Icon name="noEdit" />
                    )}
                  </Button>
                </div>
              </header>
              {isShowForm ? (
                <FormEdit
                  item={item}
                  type={"edit"}
                  editIsShowForm={editIsShowForm}
                  setDataTaskItem={setDataTaskItem}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          <h3 className={styles.item__task}>Username: {item.username}</h3>
          <h3 className={styles.item__task}>Email: {item.email} </h3>
          <h3 className={styles.item__task}>Text: {text}</h3>
          <h3 className={styles.item__task}>Status: {status}</h3>
        </div>
      </li>
    </>
  );
};

export default Item;
