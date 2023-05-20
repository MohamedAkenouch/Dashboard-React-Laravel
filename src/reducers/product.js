import { ADD_PRODUCT, FETCH_ALL_Products, UPDATE_PRODUCT, ADD_IMAGE_TO_PRODUCT, DELETE_PRODUCT_IMAGE } from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_Products:
      return action.payload;

    case UPDATE_PRODUCT:
      return products.map((product) => (product.id === action.payload.id ? action.payload : product));

    case ADD_PRODUCT:
      return [...products, action.payload];
    
    case ADD_IMAGE_TO_PRODUCT:
        return products.map((product) => {
          if(product === action.payload.product_id){
            product.images.push(action.payload);
          }

          return product;
        });

    case DELETE_PRODUCT_IMAGE:
      return products.map((product) => {
        if(product === action.payload.product_id){
          product.images.filter((image) => image.id !== action.payload.id);
        }

        return product;
      });
    
    default:
      return products;
  }
};

