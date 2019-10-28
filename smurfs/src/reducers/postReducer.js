import {
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILED
} from '../actions/postActions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        smurfs: [],
        error: ''
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ''
      }
    case POST_SMURFS_FAILED:
      return {
        ...state,
        isLoading: false,
        smurfs: [],
        error: action.payload
      }
    default:
      return state
  }
}
