import { FETCH_ALL_ORDERS, UPDATE_ORDER, GET_ORDER_ITEMS } from '../constants/actionTypes';

export default (orders = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return action.payload;

    case UPDATE_ORDER:
        return orders.map((order) => (order.id === action.payload.id ? action.payload : order));

    case GET_ORDER_ITEMS:
        return orders.map((order) => {
          if(order.id == action.payload.id) {
            order.items = action.payload.data;
          }
          return order;
        });

    default:
      return orders;
  }
};

