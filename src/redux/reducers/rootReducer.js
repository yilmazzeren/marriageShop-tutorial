import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import addCartReducer from "./addCartReducer"
const rootReducer = combineReducers({
  // Reducers
  inputReducer,
  addCartReducer
});

export default rootReducer;
