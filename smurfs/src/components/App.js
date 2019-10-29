import React from 'react'
import styled from 'styled-components'

import NewSmurf from './NewSmurf/NewSmurf'
import SmurfList from './Smurfs/SmurfList'

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>Welcome to your Smurf Village!!</AppHeader>
      <SmurfList />
      <NewSmurf />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  font-size: 3rem;
  background: linear-gradient(180deg, #40a9f3, #6d5eda);
  color: white;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`
