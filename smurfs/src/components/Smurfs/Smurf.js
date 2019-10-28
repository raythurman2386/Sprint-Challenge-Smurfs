import React from 'react'
import styled from 'styled-components'

const Smurf = ({ smurf }) => {
  return (
    <SmurfWrapper>
      <h4>{smurf.name}</h4>
      <p>{smurf.age} Years Old</p>
      <p>{smurf.height}</p>
      <ButtonWrapper>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonWrapper>
    </SmurfWrapper>
  )
}

export default Smurf

const SmurfWrapper = styled.div`
  margin: 2rem;
  box-shadow: 0 0 15px #6d5eda;
  border-radius: 8px;
  :hover {
    box-shadow: 0 0 15px #40a9f3;
    transform: scale(1.1);
  }
`

const ButtonWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 8px 14px;
  background-color: lightskyblue;
  border: none;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 -1px 10px #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 10px rgba(0, 0, 0, 0.24);
  }
`
