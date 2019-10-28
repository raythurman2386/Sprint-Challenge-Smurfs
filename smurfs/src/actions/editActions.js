import axios from 'axios'

export const EDIT_SMURF_START = 'GET_SMURFS_START'
export const EDIT_SMURF_SUCCESS = 'GET_SMURFS_SUCCESS'
export const EDIT_SMURF_FAILED = 'GET_SMURFS_FAILED'

export const editSmurf = data => dispatch => {
  dispatch({ type: EDIT_SMURF_START })
  axios
    .put(`http://localhost:3333/smurfs/${data.id}`)
    .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_SMURF_FAILED, payload: err.response }))
}
