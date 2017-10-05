import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import game from './game'
import caravan from './caravan'

const reducers = combineReducers({
  game,
  caravan,
})

export const initStore = (initialState = initialState) => 
  createStore(reducers, applyMiddleware(logger))