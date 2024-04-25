import { FETCH_ALL_FEATURE_VALUES, ADD_FEATURE_VALUE, UPDATE_FEATURE_VALUE, DELETE_FEATURE_VALUE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getFeatureValues = () => async (dispatch) => {
  try {
    const response  = await api.getFeatureValues();

    dispatch({ type: FETCH_ALL_FEATURE_VALUES, payload: response.data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addFeatureValue = (id, data) => async (dispatch) => {
  try {
    const { response }  = await api.addFeatureValue(id, data);

    dispatch({ type: ADD_FEATURE_VALUE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFeatureValue = (idFeature, id, data) => async (dispatch) => {
  try {
    const { response } = await api.updateFeatureValue(idFeature, id, data);

    dispatch({ type: UPDATE_FEATURE_VALUE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFeatureValue = (idFeature, id) => async (dispatch) => {
try {
  await api.deleteFeatureValue(id);

  dispatch({ type: DELETE_FEATURE_VALUE, payload: { id, idFeature } });
} catch (error) {
  console.log(error.message);
}
}
