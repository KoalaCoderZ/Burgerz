import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from '../constants/table'
import transfromIntoData from '../utils';

const initialState = {
  data: [],
}
export const tableReducer = (state = initialState,action) => {

  switch(action.type)
  {
    case GET_DATA:
      return Object.assign({}, state);
    case GET_DATA_SUCCESS :
    return Object.assign({}, state, transfromIntoData(action.payload));

    case GET_DATA_ERROR :
    return Object.assign({}, state, transfromIntoData(action.payload));

    default :
    return state
  }
}
