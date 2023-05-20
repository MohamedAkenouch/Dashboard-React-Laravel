import { FETCH_ALL_ORDERS, UPDATE_ORDER, GET_ORDER_ITEMS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getOrders = () => async (dispatch) => {
  try {
    const orders  = await api.getOrders();

    dispatch({ type: FETCH_ALL_ORDERS, payload: orders.data.data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getOrderItems = (id) => async (dispatch) => {
  try {
    const { data } = await api.getOrderItems(id);

    dispatch({ type: GET_ORDER_ITEMS, payload: {id, data} });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
    try {
      const { data } = await api.updateOrder(id, order);
  
      dispatch({ type: UPDATE_ORDER, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };