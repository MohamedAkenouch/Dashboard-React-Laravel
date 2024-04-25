import { GET_ORDER_ITEMS } from '../constants/actionTypes';

export default (orderItems = [], action) => {
  switch (action.type) {

    case GET_ORDER_ITEMS:
        return action.payload;

    default:
      return orderItems;
  }
};

