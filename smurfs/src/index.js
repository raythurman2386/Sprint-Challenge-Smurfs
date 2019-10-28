import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer as getSmurfReducer } from './reducers'
import { reducer as postSmurtReducer } from './reducers/postReducer'

const reducers = combineReducers({
  getSmurfs: getSmurfReducer,
  postSmurfs: postSmurtReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
