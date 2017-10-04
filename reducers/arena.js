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
  warriors: [],
}

const applyWarriorProps = character => ({
  character: character,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
    case DAY_ADVANCE:
      const numberOfWarriors = path(['payload', 'numberOfWarriors'], action) || 5
      return {
        ...state,
        warriors: numberOfWarriors > 0 ? map(applyWarriorProps, generateCharacters(numberOfWarriors)) : [],
      }
  
    default: return state
  }
}