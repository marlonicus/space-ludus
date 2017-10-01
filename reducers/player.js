import { 
  START,
  TIME_ADVANCE,
} from '../actions/game'

const initialState = {
  coins: 100,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}