import axios from 'axios'

export const DELETE_SMURF_START = 'GET_SMURFS_START'
export const DELETE_SMURF_SUCCESS = 'GET_SMURFS_SUCCESS'
export const DELETE_SMURF_FAILED = 'GET_SMURFS_FAILED'

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: DELETE_SMURF_FAILED, payload: err.response })
    )
}
