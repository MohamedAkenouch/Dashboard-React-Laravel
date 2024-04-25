import { GET_ORDER_ITEMS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getOrderItems = () => async (dispatch) => {
  try {
    const { data } = await api.getAllOrderItems();
    console.log("Items Data : ", data);

    dispatch({ type: GET_ORDER_ITEMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};