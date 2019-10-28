import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteSmurf } from '../../actions/deleteActions'
import { editSmurf } from '../../actions/editActions'
import styled from 'styled-components'

const Smurf = ({ smurf }) => {
  const [updateSmurf, setUpdateSmurf] = useState({
    name: '' || smurf.name,
    age: '' || smurf.age,
    height: '' || smurf.height,
    id: smurf.id
  })

  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  const handleChange = e => {
    setUpdateSmurf({
      ...updateSmurf,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editSmurf(updateSmurf))
  }

  return (
    <SmurfWrapper>
      {isEditing ? (
        <input
          name='name'
          value={updateSmurf.name}
          placeholder={smurf.name}
          onChange={e => handleChange(e)}
        />
      ) : (
        <h4>{smurf.name}</h4>
      )}

      {isEditing ? (
        <input
          name='age'
          value={updateSmurf.age}
          placeholder={smurf.age}
          onChange={e => handleChange(e)}
        />
      ) : (
        <p>{smurf.age} Years Old</p>
      )}

      {isEditing ? (
        <input
          name='height'
          value={updateSmurf.height}
          placeholder={smurf.height}
          onChange={e => handleChange(e)}
        />
      ) : (
        <p>{smurf.height}</p>
      )}

      {!isEditing ? (
        <ButtonWrapper>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
          <Button onClick={() => dispatch(deleteSmurf(smurf.id))}>
            Delete
          </Button>
        </ButtonWrapper>
      ) : (
        <Button onClick={handleSubmit}>Submit</Button>
      )}
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
