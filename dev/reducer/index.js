import { combineReducers } from "redux";

import tasks from "./tasks.js";

const reducer = combineReducers({
  tasks: tasks,
});

export default reducer;
