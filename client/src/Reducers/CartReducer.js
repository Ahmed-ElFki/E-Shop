import {
  ADD_TO_CART,
  DEL_FROM_CART,
  ADD_ONE,
  DEL_ONE,
} from "../Constants/CartConstants";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.pizza];
    case DEL_FROM_CART:
      return [...state.filter((pizza) => pizza._id !== action.id)];
    case ADD_ONE:
      return [
        ...state.map((pizza) => {
          if (pizza._id === action.id) {
            const newQte = pizza.qte + 1;
            return { ...pizza, qte: newQte };
          } else return pizza;
        }),
      ];
    case DEL_ONE:
      return [
        ...state.map((pizza) => {
          if (pizza._id === action.id) {
            if (pizza.qte - 1 === 0) return { ...pizza, qte: 1 };
            else return { ...pizza, qte: pizza.qte - 1 };
          } else return pizza;
        }),
      ];

    default:
      return state;
  }
};

export default CartReducer;
