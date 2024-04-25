import { FETCH_ALL_FEATURES, ADD_FEATURE, UPDATE_FEATURE, DELETE_FEATURE, FETCH_ALL_FEATURE_VALUES, ADD_FEATURE_VALUE, UPDATE_FEATURE_VALUE, DELETE_FEATURE_VALUE } from '../constants/actionTypes';

export default (features = [], action) => {
  switch (action.type) {

    case FETCH_ALL_FEATURES:
        return action.payload;

    case ADD_FEATURE:
      return features.push(action.payload);

    case UPDATE_FEATURE:
      return features.map((feature) => (feature.id === action.payload.id ? action.payload : feature));

    case DELETE_FEATURE:
      return features.filter((feature) => (feature.id !== action.payload.id));
    
    case ADD_FEATURE_VALUE:
      return features.map((feature) => (feature.id === action.payload.id ? action.payload : feature));

    case UPDATE_FEATURE_VALUE:
      return features.map((feature) => (feature.id === action.payload.id ? action.payload : feature));
    
    case DELETE_FEATURE_VALUE:
      return features.map((feature) => {
        if(feature.id === action.payload.idFeature) {
          feature.values.filter((value) => (value.id !== action.payload.id));
        }
        return feature;
      });
      
    default:
      return features;
  }
};

