import { combineReducers, createStore } from 'redux'
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
  cartReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;