import { FETCH_ALL_CATEGORIES, UPDATE_CATEGORY, ADD_CATEGORY , GET_CATEGORY_PRODUCTS, DELETE_CATEGORY } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCategories = () => async (dispatch) => {
  try {
    const categories  = await api.getCategories();

    dispatch({ type: FETCH_ALL_CATEGORIES, payload: categories.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCategoryProducts = () => async (dispatch) => {
  try {
    const categoriesProducts  = await api.getCategoryProducts();
    
    dispatch({ type: GET_CATEGORY_PRODUCTS, payload: categoriesProducts.data });
  } catch (error) {
    console.log(error.message);
  }
};


export const addCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.addCategory(category);

    dispatch({ type: ADD_CATEGORY, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateCategory = (id, category) => async (dispatch) => {
    try {
      const { data } = await api.updateCategory(id, category);
  
      dispatch({ type: UPDATE_CATEGORY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteCategory = (id) => async (dispatch) => {
    try {
      await api.deleteCategory(id);
  
      dispatch({ type: DELETE_CATEGORY, payload: { id } });
    } catch (error) {
      console.log(error.message);
    }
  }