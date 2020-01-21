import axios from "axios";

export const updateTask = ({
  id,
  text,
  status,
  token,
}) => dispatch => {
  let formData = new FormData();
  formData.append("text", text);
  formData.append("status", status);
  formData.append("token", token);
  axios
    .post(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${+id}?developer=admin`,
      formData
    )
    .then(response => {
      const status = response.data.status;
      if (status === "ok") {
        const task = response.data.message.tasks;
        dispatch({
          type: "UPDATE_TASK",
          payload: task
        });
      }
    })
    .catch(reject => {
      // console.log(`Server error ${reject.response}`);
    })
    .finally(() => {});
};

export const addTask = ({
  username,
  email,
  text,
  setStatusAction
}) => dispatch => {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("text", text);
  axios
    .post(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=admin`,
      formData
    )
    .then(response => {
      const status = response.data.status;
      if (status === "ok") {
        const task = response.data.message.tasks;
        dispatch({
          type: "ADD_TASK",
          payload: task
        });
      }
    })
    .catch(reject => {
      // console.log(`Server error ${reject.response}`);
    })
    .finally(() => {});
};
export const getTasks = ({
  sort_field,
  sort_direction,
  page,
  setTaskLenght,
  setTasksList,
  setStatusAction
}) => dispatch => {
  axios
    .get(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=admin&sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`
    )
    .then(response => {
      const status = response.data.status;
      if (status === "ok") {
        const listLenght = response.data.message.total_task_count;
        setTaskLenght(Math.ceil(listLenght / 3));
        const list = response.data.message.tasks;
        setTasksList({ [`${+page}`]: list });
        dispatch({
          type: "GET_TASK",
          payload: { [`${+page}`]: list, page: page }
        });
      }
    })
    .catch(reject => {
      // console.log(`Server error ${reject.response}`);
    })
    .finally(() => {});
};
