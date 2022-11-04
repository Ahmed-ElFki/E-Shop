import { combineReducers, createStore } from "redux";
import CartReducer from "../Reducers/CartReducer";
import UserReducer from "../Reducers/UserReducer";

const allReducers = combineReducers({
  cart: CartReducer,
  user: UserReducer,
});

export const Store = createStore(allReducers);
