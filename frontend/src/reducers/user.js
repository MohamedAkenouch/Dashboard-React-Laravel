import { FETCH_ALL_USERS, FETCH_USER, DELETE_USER } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;

    case FETCH_USER:
      return action.payload;

    case DELETE_USER:
      return users.filter((user) => (user.id !== action.payload.id));

    default:
      return users;
  }
};

