import { FETCH_ALL_BRANCHES, ADD_BRANCH, UPDATE_BRANCH, DELETE_BRANCH } from '../constants/actionTypes';

export default (braches = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BRANCHES:
      return action.payload;

    case ADD_BRANCH:
        return braches.push(action.payload);

    case UPDATE_BRANCH:
      return braches.map((banner) => (banner.id === action.payload.id ? action.payload : banner));

    case DELETE_BRANCH:
      return braches.filter((banner) => (banner.id !== action.payload.id));

    default:
      return braches;
  }
};

