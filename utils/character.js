import uuid from 'uuid'
import { 
  times, prop, find, equals, pipe, curry, reduce, partialRight, any,
  propEq, partial, ifElse, always, contains } from 'ramda'

import { NAMES } from '../constants/names' 
import { STAT_ID } from '../constants/stats' 


import { 
  pickRandomFromArray,
  getRandomInt,
} from './misc'


export const generateName = partial(pickRandomFromArray)([NAMES])
export const generateAge = partial(getRandomInt)([15, 50])

export const getStats = prop('stats')
export const getStatCurrent = prop('current')
export const getStatBase = prop('base')
export const getStatId = prop('id')

export const statIdEquals = curry(propEq)('id')
export const statIdEqualsStrength = statIdEquals(STAT_ID.STR)
export const statIdEqualsHp = statIdEquals(STAT_ID.HP)

export const getStrengthCurrentValue = pipe(getStats, find(statIdEqualsStrength), getStatCurrent)
export const getHpCurrentValue = pipe(getStats, find(statIdEqualsHp), getStatCurrent)

export const findCharacter = ({ id, list }) => find(propEq('id', id), list)

export const generateStat = ({ id, label, value, multiplier = 1 }) => ({
  id,
  label,
  multiplier,
  current: value,
  base: value,
})

export const generateCharacter = () => ({
  id: uuid(),
  name: generateName(),
  age: generateAge(),
  isAlive: true,
  stats: [
    // Hit Points
    generateStat({
      id: STAT_ID.HP,
      label: `HP`,
      multiplier: 10,
      value: getRandomInt(30, 100), 
    }),
    
    // Action Points
    generateStat({
      id: STAT_ID.AP,
      label: `AP`,
      multiplier: 10,
      value: getRandomInt(70, 100), 
    }),
    
    // Strength
    generateStat({
      id: STAT_ID.STR,
      label: `Strength`,
      value: getRandomInt(1, 10), 
    }),
    
    // Intelligence
    generateStat({
      id: STAT_ID.INT,
      label: `Intelligence`,
      value: getRandomInt(1, 10), 
    }),
    
    // Agility
    generateStat({
      id: STAT_ID.AGI,
      label: `Agility`,
      value: getRandomInt(1, 10), 
    }),
  ],
})

export const appraiseCharacter = 
  pipe(
    getStats,
    reduce((prev, curr) => {
      const divider = prop('multiplier', curr)
      return prev + Math.floor(getStatBase(curr) / divider)
    }, 0)
  )

export const generateCharacters = times(generateCharacter)