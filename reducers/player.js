import {
  ADD_SLAVE,
} from '../actions/slave'

import { 
  GAME_START,
  DAY_ADVANCE,
} from '../actions/game'

import {
  PURCHASE,
} from '../actions/player'

const initialState = {
  coins: 100,  
  slaves: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        name: action.payload.name,
        ...state,
      }
      
    case DAY_ADVANCE:
      return {
        ...state,
        coins: state.coins - state.slaves.length,
      }
      
    case PURCHASE:
      return {
        ...state,
        coins: state.coins - action.payload.value,
      }
    
    case ADD_SLAVE:
      return {
        ...state,
        slaves: [...state.slaves, action.payload.character],
      }
    default: return state
  }
}