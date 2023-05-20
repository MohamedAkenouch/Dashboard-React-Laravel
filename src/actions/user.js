import { FETCH_ALL_USERS, FETCH_USER, DELETE_USER} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data }  = await api.getUsers();

    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (phone) => async (dispatch) => {
  try {
    await api.deleteUser(phone);

    dispatch({ type: DELETE_USER, payload: { phone } });
  } catch (error) {
    console.log(error.message);
  }
}