import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED
} from '../actions'

import {
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED
} from '../actions/deleteActions'

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
    case GET_SMURFS_START || POST_SMURFS_START || DELETE_SMURF_START:
      return {
        ...state,
        smurfs: [],
        isLoading: true
      }
    case GET_SMURFS_SUCCESS || POST_SMURFS_SUCCESS || DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      }
    case GET_SMURFS_FAILED || POST_SMURFS_FAILED || DELETE_SMURF_FAILED:
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
