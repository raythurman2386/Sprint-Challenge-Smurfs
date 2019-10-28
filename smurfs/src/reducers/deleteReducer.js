import {
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED
} from '../actions/deleteActions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SMURF_START:
      return {
        ...state,
        smurfs: [],
        isLoading: true,
        error: ''
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      }
    case DELETE_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}
