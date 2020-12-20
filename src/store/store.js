import { combineReducers, createStore } from "redux";
import carReducer from "./reducers/carReducer";

const rootReducer = combineReducers({
  carReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;