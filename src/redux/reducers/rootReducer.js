import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import addCartReducer from "./addCartReducer";
import categoryListReducer from "./categoryListReducer"
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  // Reducers
  inputReducer,
  addCartReducer,
  categoryListReducer,
  productsReducer
});

export default rootReducer;
