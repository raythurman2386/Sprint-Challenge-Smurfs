import React from 'react'
import styled from 'styled-components'

const Smurf = ({ smurf }) => {
  return (
    <SmurfWrapper>
      <h4>{smurf.name}</h4>
      <p>{smurf.age} Years Old</p>
      <p>{smurf.height}</p>
    </SmurfWrapper>
  )
}

export default Smurf

const SmurfWrapper = styled.div`
  background: #777;
  margin: 2rem;
  box-shadow: 0 0 15px black;
  border-radius: 8px;
  :hover {
    box-shadow: 0 0 15px white;
    transform: scale(1.1);
  }
`
