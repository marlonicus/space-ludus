import {
  ADD_SLAVE,
} from '../actions/slave'

const initialState = {
  slaves: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SLAVE:
      return {
        ...state,
        slaves: [...state.slaves, action.payload.character],
      }
    default: return state
  }
  
  return state
}