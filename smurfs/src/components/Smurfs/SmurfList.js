import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSmurfs } from '../../actions'
import Smurf from './Smurf'

const SmurfList = () => {
  const smurfs = useSelector(state => state.getSmurfs.smurfs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSmurfs())
  }, [])

  return (
    <div>
      {smurfs &&
        smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
    </div>
  )
}

export default SmurfList
