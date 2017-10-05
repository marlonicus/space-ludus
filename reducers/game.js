import { 
  GAME_START,
  DAY_ADVANCE,
} from '../actions/game'

const initialState = {
  day: 1,
  initialised: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        initialised: true,
      }
      
    case DAY_ADVANCE:
      return {
        ...state,
        day: state.day + 1,
      }
  
    default: return state
  }
}