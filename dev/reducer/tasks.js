const reducer = (tasks = {}, { type, payload }) => {
  switch (type) {
    case "REMOVE_TASK":
      return tasks.filter(item => item.id !== payload);
    case "UPDATE_TASK":
      return tasks.map(item => (payload.id === item.id ? payload : item));
    case "CLEAR_TASK":
      return {};
    case "GET_TASK":
      tasks[payload.page] = payload[payload.page];
      // console.log("tasks ",tasks);
      return tasks;
    default:
      return tasks;
  }
};

export default reducer;
