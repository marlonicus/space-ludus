import { map, path, partialRight, pipe, ifElse, always, equals } from 'ramda'

import { 
  generateCharacters,
  appraiseCharacter,
  getHpCurrentValue,
} from '../utils/character'

import { 
  GAME_START,
  DAY_ADVANCE,
  BATTLE_START,
  PURCHASE,
  INJURE,
} from '../actions/game'

import {
  ADD_SLAVE,
} from '../actions/slave'

import { STAT_ID } from '../constants/stats'

const initialState = {
  day: 1,
  initialised: false,
  coins: 100,
  slaves: [],
  warriors: [],
  inBattle: false,
}

const renewWarriors = (state, action) => {
  const numberOfWarriors = path(['payload', 'numberOfWarriors'], action) || 5
  
  return {
    ...state,
    warriors: numberOfWarriors > 0 ? generateCharacters(numberOfWarriors) : [],
  }
}

const gameInitialise = (state, action) => ({
  ...state,
  initialised: true,
  name: action.payload.name,
})

const dayAdvance = (state, action) => ({
  ...state,
  day: state.day + 1,
})

const takeWages = (state, action) => ({
  ...state,
  coins: state.coins - state.slaves.length,
})

const decreaseStat = (stat, { statId, amount }) => {
  if (stat.id === statId) {
    return {
      ...stat,
      current: stat.current - amount,
    }
  }
  
  return stat
}

const injureCharacter = (state, action) => ({
  ...state,
  warriors: map(character => {
    if (character.id !== action.payload.id) {
      return character
    }
    
    const statDecrease = {
      statId: STAT_ID.HP,
      amount: action.payload.damage,
    }
    
    return {
      ...character,
      stats: map(
        partialRight(decreaseStat, [statDecrease], character.stats),
        character.stats
      )
    }
  }, state.warriors),
})

const registerDead = (state, action) => {
  return {
    ...state,
    warriors: map(character => ({
      ...character,
      isAlive: getHpCurrentValue(character) > 0,
    }), state.warriors)
  }
}

const pipeModifierswithAction = (modifiers, action) => pipe(
  ...map(modifier => partialRight(modifier, [action]), modifiers)
)

export default (state = initialState, action) => {
  const pipeModifierswithActionPartial = partialRight(pipeModifierswithAction, [action])
  
  switch (action.type) {
    case GAME_START:
      return pipeModifierswithActionPartial([
        gameInitialise,
        renewWarriors,
      ])(state)
      
    case DAY_ADVANCE:
      return pipeModifierswithActionPartial([
        renewWarriors,
        dayAdvance,
        takeWages,
      ])(state)
      
    case BATTLE_START:
      return {
        ...state,
        inBattle: {
          playerId: action.payload.playerId,
          npcId: action.payload.npcId,
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
    
    case INJURE:
      return pipeModifierswithActionPartial([
        injureCharacter,
        registerDead,
      ])(state)
      
    default: return state
  }
}