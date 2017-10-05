import { map, path } from 'ramda'

import { 
  generateCharacters,
  appraiseCharacter,
} from '../utils/character'

import { 
  GAME_START,
  DAY_ADVANCE,
  BATTLE_START,
  PURCHASE,
} from '../actions/game'

import {
  ADD_SLAVE,
} from '../actions/slave'

const initialState = {
  day: 1,
  initialised: false,
  coins: 100,
  slaves: [],
  warriors: [],
  inBattle: false,
}

const applyWarriorProps = character => ({
  character: character,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        initialised: true,
        name: action.payload.name,
      }
      
    case DAY_ADVANCE:
      const numberOfWarriors = path(['payload', 'numberOfWarriors'], action) || 5
      return {
        ...state,
        day: state.day + 1,
        coins: state.coins - state.slaves.length,
        warriors: numberOfWarriors > 0 ? map(applyWarriorProps, generateCharacters(numberOfWarriors)) : [],
      }
      
    case BATTLE_START:
      return {
        ...state,
        inBattle: {
          player: action.payload.player,
          npc: action.payload.npc,
        },
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