import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import addCartReducer from "./addCartReducer";
import categoryListReducer from "./categoryListReducer"
const rootReducer = combineReducers({
  // Reducers
  inputReducer,
  addCartReducer,
  categoryListReducer
});

export default rootReducer;
