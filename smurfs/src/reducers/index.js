import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED
} from '../actions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        smurfs: [],
        isLoading: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      }
    case GET_SMURFS_FAILED:
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
