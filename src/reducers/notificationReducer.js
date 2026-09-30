function notificationReducer(state, action) {
  switch (action.type) {
    case "SHOW":
      return {
        message: action.payload,
        type: "success",
      };

    case "HIDE":
      return {
        message: "",
        type: "",
      };

    default:
      return state;
  }
}

export default notificationReducer;