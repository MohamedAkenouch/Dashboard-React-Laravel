import { FETCH_ALL_Products , ADD_PRODUCT, UPDATE_PRODUCT, ADD_IMAGE_TO_PRODUCT, DELETE_PRODUCT_IMAGE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const products  = await api.getProducts();
    console.log(products);
    dispatch({ type: FETCH_ALL_Products, payload: products.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(product);

    console.log("DATADATA : ", data);

    dispatch({ type: ADD_PRODUCT, payload: data.data });

    return data.data.id;
  } catch (error) {
    console.log(error.message);
  }
};


export const updateProduct = (id, product) => async (dispatch) => {
    try {
      const { data } = await api.updateProduct(id, product);
  
      dispatch({ type: UPDATE_PRODUCT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const addImage = (image) => async (dispatch) => {
    try {
      const { data } = await api.addImage(image);
  
      dispatch({ type: ADD_IMAGE_TO_PRODUCT, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const removeImage = (id, product_id) => async (dispatch) => {
  try {
    await api.deleteImage(id);

    dispatch({ type: DELETE_PRODUCT_IMAGE, payload: {id, product_id} });
  } catch (error) {
    console.log(error.message);
  }
};