import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import slaves from './slaves'
import game from './game'
import player from './player'

const reducers = combineReducers({
  game,
  player,
  slaves,
})

export const initStore = (initialState = initialState) => 
  createStore(reducers, applyMiddleware(logger))