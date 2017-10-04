import { map, path } from 'ramda'

import { 
  generateCharacters,
  appraiseCharacter,
} from '../utils/character'

import { 
  GAME_START,
  DAY_ADVANCE,
} from '../actions/game'

import {
  ADD_SLAVE as SLAVE_PURCHASED,
} from '../actions/slave'

const initialState = {
  prisoners: [],
}

const applyPrisonerProps = character => ({
  character: character,
  available: true,
  value: appraiseCharacter(character),
})

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
    case DAY_ADVANCE:
      const numberOfPrisoners = path(['payload', 'numberOfPrisoners'], action) || 5
      return {
        ...state,
        prisoners: numberOfPrisoners > 0 ? map(applyPrisonerProps, generateCharacters(numberOfPrisoners)) : [],
      }
    
    case SLAVE_PURCHASED:
      return {
        ...state,
        prisoners: map(prisoner => ({
          ...prisoner,
          available: prisoner.character.id === action.payload.character.id ? false : prisoner.available,
        }), state.prisoners)
      }
      
  
    default: return state
  }
}