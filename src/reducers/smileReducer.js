// Reducer receives the current state and then returns the new state based on
// the action. Action.payload is the true/false value sent in.
// So, in this case, set smiling based on smile true or smile false
export default (state, action) => {
  switch (action.type) {
    case "smile":
      return {
        smiling: action.payload
      };
    default:
      return state;
  }
};
