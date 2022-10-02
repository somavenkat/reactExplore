import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from "./counterReducer";

const middleWare = [thunk];

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
