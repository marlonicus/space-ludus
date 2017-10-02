import { 
  GAME_START,
  TIME_ADVANCE,
} from '../actions/game'

import {
  PURCHASE,
} from '../actions/player'

const initialState = {
  coins: 100,
  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        name: action.payload.name,
        ...state,
      }
      
    case PURCHASE:
      return {
        ...state,
        coins: state.coins - action.payload.value,
      }
    default: return state
  }
}