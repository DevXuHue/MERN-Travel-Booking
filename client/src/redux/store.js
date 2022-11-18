import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registerReducer } from "./reducers/user.reducer";

const middleware = [thunk];

const inititalState = {};

const reducers = combineReducers({
  // register: registerReducer,
});

const store = createStore(
  reducers,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
