import { ADD_ORDER } from "./actions";

const init = {
  orders:[],
  isLoggedIn:false,

};


export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
      return {...store,orders:[...store.orders+payload]}
    default:
      return store;
  }
};
