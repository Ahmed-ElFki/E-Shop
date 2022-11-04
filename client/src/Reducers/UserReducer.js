import { DELETE_USER, UPDATE_USER } from "../Constants/UserConstants";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_USER:
      return [...state.filter((user) => user._id !== action.id)];
    case UPDATE_USER:
      return [
        ...state.map((user) => {
          if (user._id === action.id) {
            return { ...action.update };
          } else return user;
        }),
      ];
    default:
      return state;
  }
};

export default CartReducer;
