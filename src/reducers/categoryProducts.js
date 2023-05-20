import { GET_CATEGORY_PRODUCTS } from '../constants/actionTypes';

export default (categoriesProducts = [], action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS:
      return action.payload;
    
    default:
      return categoriesProducts;
  }
};

