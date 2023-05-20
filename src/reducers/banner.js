import { FETCH_ALL_BANNERS, ADD_BANNER, UPDATE_BANNER, DELETE_BANNER } from '../constants/actionTypes';

export default (banners = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BANNERS:
      return action.payload;

    case ADD_BANNER:
        return banners.push(action.payload);

    case UPDATE_BANNER:
      return banners.map((banner) => (banner.id === action.payload.id ? action.payload : banner));

    case DELETE_BANNER:
      return banners.filter((banner) => (banner.id !== action.payload.id));

    default:
      return banners;
  }
};

