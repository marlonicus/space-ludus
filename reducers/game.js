import { ifElse, equals, always, length, add, prop } from 'ramda'

import { 
  START,
  TIME_ADVANCE,
} from '../actions/game'

const GAME_TIMES = [
  { name: 'Night' },
  { name: 'Morning' },
  { name: 'Midday' },
  { name: 'Evening'}
]

const initialState = {
  time: 2,
  initialised: false,
}

const updateTime = ifElse(
  equals(length(GAME_TIMES)),
  always(0),
  add(1),
)

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        initialised: true,
      }
      
    case TIME_ADVANCE:
      return {
        ...state,
        time: updateTime(prop('time', state))
      }
  
    default: return state
  }
}