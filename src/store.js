import { createStore } from "redux";
import smileReducer from "reducers/smileReducer";

// Configure the store by setting the initial value to true
// Then create the store using the smileReducer and the state
function configureStore(state = { smiling: true }) {
  return createStore(smileReducer, state);
}
export default configureStore;
