import { FETCH_ALL_MESURES } from '../constants/actionTypes';

export default (mesures = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MESURES:
      return action.payload;
    
    default:
      return mesures;
  }
};

