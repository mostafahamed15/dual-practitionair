export default  function UserReducer(state = "", action: any) {
  switch (action.type) {
    case "PRIVATE":
      state = "PRIVATE";
      break;
    case "GOVERNMENT":
      state = "GOVERNMENT";
      break;
    default:
      state = state;
      break;
  }
  return state;
};

