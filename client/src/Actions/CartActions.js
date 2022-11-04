import {
  ADD_TO_CART,
  DEL_FROM_CART,
  ADD_ONE,
  DEL_ONE,
} from "../Constants/CartConstants";

const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
    pizza,
  };
};
const delFromCart = (id) => {
  return {
    type: DEL_FROM_CART,
    id,
  };
};
const addOne = (id) => {
  return {
    type: ADD_ONE,
    id,
  };
};
const delOne = (id) => {
  return {
    type: DEL_ONE,
    id,
  };
};

export { addToCart, delFromCart, addOne, delOne };
