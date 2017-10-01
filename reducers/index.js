import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import gladiators from './gladiators'
import game from './game'
import player from './player'

const reducers = combineReducers({
  gladiators,
  game,
  player,
})

export const initStore = (initialState = initialState) => {
  return createStore(reducers, applyMiddleware(logger))
}