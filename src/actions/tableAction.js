import * as types from '../constants/table' 

export const GET_DATA = () => {

  return (dispatch) => {

      setTimeout(()=>{
        fetch('http://localhost:3004/items')
        .then(res => res.json())
        .then(data => dispatch(GET_DATA_SUCCESS(data)))
        .catch(err  => dispatch(GET_DATA_ERROR(err)))
      },1000)
  }
}

export const GET_DATA_SUCCESS = (data) => {

  return {
    type: types.GET_DATA_SUCCESS,
    payload : data
  }
}

export const GET_DATA_ERROR = (err) => {

  return {
    type: types.GET_DATA_ERROR,
    payload : err
  }
}
