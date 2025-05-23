import { combineReducers } from "redux";
import authReducer from "./authReducer";
import prodReducer from "./prodReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  authReducer,
  prodReducer,
  bookReducer,
});

export default rootReducer;
