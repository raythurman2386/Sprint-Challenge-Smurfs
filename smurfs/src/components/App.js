import React from 'react'

import NewSmurf from './NewSmurf/NewSmurf'
import SmurfList from './Smurfs/SmurfList'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <NewSmurf />
    </div>
  )
}

export default App
