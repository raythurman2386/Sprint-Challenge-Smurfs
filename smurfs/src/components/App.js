import React from 'react'
import styled from 'styled-components'

import NewSmurf from './NewSmurf/NewSmurf'
import SmurfList from './Smurfs/SmurfList'

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>SMURFS! 2.0 W/ Redux</AppHeader>
      <SmurfList />
      <NewSmurf />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  text-align: center;
  color: white;
`
const AppHeader = styled.header`
  font-size: 3rem;
  background-color: #111;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
