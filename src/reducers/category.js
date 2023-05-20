import { FETCH_ALL_CATEGORIES, UPDATE_CATEGORY, ADD_CATEGORY , DELETE_CATEGORY} from '../constants/actionTypes';

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;

    case UPDATE_CATEGORY:
        return categories.map((category) => (category.id === action.payload.id ? action.payload : category));

    case ADD_CATEGORY:
      return [...categories, action.payload];
    
    case DELETE_CATEGORY:
      return categories.filter((category) => (category.id !== action.payload.id));
    
    default:
      return categories;
  }
};

