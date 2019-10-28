import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postSmurfs } from '../../actions/postActions'
import styled from 'styled-components'

const NewSmurf = () => {
  const dispatch = useDispatch()
  const [smurfData, setSmurfData] = useState({
    name: '',
    age: '',
    height: ''
  })

  // HandleChange to take care of the form data
  const handleChange = e => {
    setSmurfData({
      ...smurfData,
      [e.target.name]: e.target.value
    })
  }

  // Submit to send the dispatch action
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(postSmurfs(smurfData))
    console.log(smurfData)
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          name='name'
          placeholder='Smurf Name'
          value={smurfData.name}
          onChange={e => handleChange(e)}
          required
        />
        <Input
          name='age'
          placeholder='Smurf Age'
          value={smurfData.age}
          onChange={e => handleChange(e)}
          required
        />
        <Input
          name='height'
          placeholder='Smurf Height'
          value={smurfData.height}
          onChange={e => handleChange(e)}
          required
        />
        <ButtonWrapper>Add Smurf</ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default NewSmurf

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 60px auto 0;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`

const Input = styled.input`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`

const ButtonWrapper = styled.button`
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
