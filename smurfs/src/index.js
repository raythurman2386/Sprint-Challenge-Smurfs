import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer as getSmurfReducer } from './reducers'
import { reducer as postSmurfReducer } from './reducers/postReducer'
import { reducer as deleteSmurfReducer } from './reducers/deleteReducer'

const reducers = combineReducers({
  getSmurfs: getSmurfReducer
  // postSmurfs: postSmurfReducer
  // deleteSmurf: deleteSmurfReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
