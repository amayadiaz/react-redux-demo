import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";

const allReducers = combineReducers({
  userReducer,
});

export default allReducers;