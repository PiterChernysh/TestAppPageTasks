import axios from "axios";

export const loginUser = props => {
  const { username, password, setAdminToken } = props;
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  axios
    .post(
      "https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=admin",
      formData
    )
    .then(response => {
      const status = response.data.status;
      const token = response.data.message.token;
      if (status === "ok") {
        setAdminToken(token);
      } else setAdminToken(undefined);
    })
    .catch(reject => {
      // console.log(`Server error ${reject.response}`);
    })
    .finally(() => {});
};
