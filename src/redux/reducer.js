import { combineReducers } from "redux";
import userReducer from "src/redux/user/reducer";

export default combineReducers({
    user: userReducer,
});
