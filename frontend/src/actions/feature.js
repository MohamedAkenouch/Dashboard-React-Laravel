import { FETCH_ALL_FEATURES, ADD_FEATURE, UPDATE_FEATURE, DELETE_FEATURE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getFeatures = () => async (dispatch) => {
  try {
    const response  = await api.getFeatures();

    dispatch({ type: FETCH_ALL_FEATURES, payload: response.data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFeature = (data) => async (dispatch) => {
  try {
    const { response }  = await api.addFeature(data);

    dispatch({ type: ADD_FEATURE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFeature = (id, data) => async (dispatch) => {
  try {
    const { response } = await api.updateFeature(id, data);

    dispatch({ type: UPDATE_FEATURE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFeature = (id) => async (dispatch) => {
try {
  await api.deleteFeature(id);

  dispatch({ type: DELETE_FEATURE, payload: { id } });
} catch (error) {
  console.log(error.message);
}
}
