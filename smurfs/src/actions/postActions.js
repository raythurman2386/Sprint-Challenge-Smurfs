import axios from 'axios'

export const POST_SMURFS_START = 'GET_SMURFS_START'
export const POST_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const POST_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export const postSmurfs = data => dispatch => {
  dispatch({ type: POST_SMURFS_START })
  axios
    .post(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: POST_SMURFS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: POST_SMURFS_FAILED, payload: err.response }))
}
