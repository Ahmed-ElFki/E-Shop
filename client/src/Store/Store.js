import { combineReducers, createStore } from "redux";
import CartReducer from "../Reducers/CartReducer";

const allReducers = combineReducers({
  cart: CartReducer,
});

export const Store = createStore(allReducers);
