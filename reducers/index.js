import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import game from './game'
import player from './player'
import caravan from './caravan'
import arena from './arena'

const reducers = combineReducers({
  game,
  player,
  caravan,
  arena,
})

export const initStore = (initialState = initialState) => 
  createStore(reducers, applyMiddleware(logger))