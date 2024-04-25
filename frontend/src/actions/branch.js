import { FETCH_ALL_BRANCHES, ADD_BRANCH, UPDATE_BRANCH, DELETE_BRANCH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getBranches = () => async (dispatch) => {
  try {
    const response  = await api.getBranches();

    dispatch({ type: FETCH_ALL_BRANCHES, payload: response.data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBranch = (data) => async (dispatch) => {
    try {
      const { response } = await api.addBranch(data);
  
      dispatch({ type: ADD_BRANCH, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateBranch = (id, data) => async (dispatch) => {
    try {
      const { response } = await api.updateBranch(id, data);
  
      dispatch({ type: UPDATE_BRANCH, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteBranch = (id) => async (dispatch) => {
  try {
    await api.deleteBranch(id);

    dispatch({ type: DELETE_BRANCH, payload: { id } });
  } catch (error) {
    console.log(error.message);
  }
}