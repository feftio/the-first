import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer from "src/redux/reducer";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
