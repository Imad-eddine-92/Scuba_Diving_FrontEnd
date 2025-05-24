import { combineReducers } from "redux";
import authReducer from "./authReducer";
import prodReducer from "./prodReducer";
import bookReducer from "./bookReducer";
import userReducer from "./userReducer"; 

const rootReducer = combineReducers({
  authReducer,
  prodReducer,
  bookReducer,
  userReducer, 
});

export default rootReducer;
