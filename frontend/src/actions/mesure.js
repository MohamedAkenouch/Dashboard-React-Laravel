import { FETCH_ALL_MESURES} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getMesures = () => async (dispatch) => {
  try {
    const mesures  = await api.getMesures();

    dispatch({ type: FETCH_ALL_MESURES, payload: mesures.data });
  } catch (error) {
    console.log(error.message);
  }
};

