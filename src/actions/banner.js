import { FETCH_ALL_BANNERS, ADD_BANNER, UPDATE_BANNER, DELETE_BANNER } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getBanners = () => async (dispatch) => {
  try {
    const response  = await api.getBanners();

    dispatch({ type: FETCH_ALL_BANNERS, payload: response.data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBanner = (banner) => async (dispatch) => {
    try {
      const { response } = await api.addBanner(banner);
  
      dispatch({ type: ADD_BANNER, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateBanner = (id, banner) => async (dispatch) => {
    try {
      const { response } = await api.updateBanner(id, banner);
  
      dispatch({ type: UPDATE_BANNER, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deleteBanner = (id) => async (dispatch) => {
  try {
    await api.deleteBanner(id);

    dispatch({ type: DELETE_BANNER, payload: { id } });
  } catch (error) {
    console.log(error.message);
  }
}