import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSmurfs } from '../actions'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const smurfs = useSelector(state => state.getSmurfs.smurfs)

  useEffect(() => {
    dispatch(getSmurfs())
  }, [])

  console.log(smurfs)

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  )
}

export default App
