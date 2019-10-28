import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSmurfs } from '../../actions'
import styled from 'styled-components'
import Smurf from './Smurf'

const SmurfList = () => {
  const smurfs = useSelector(state => state.getSmurfs.smurfs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSmurfs())
  }, [])

  return (
    <SmurfWrapper>
      {smurfs &&
        smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
    </SmurfWrapper>
  )
}

export default SmurfList

const SmurfWrapper = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 2rem;
`
