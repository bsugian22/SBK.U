import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

export default rootReducer;
