import uuid from 'uuid'
import { times } from 'ramda'

import { NAMES } from '../constants/names' 
import { STAT_ID } from '../constants/stats' 


import { 
  pickRandomFromArray,
  getRandomInt,
} from './misc'


export const generateName = () => pickRandomFromArray(NAMES)

export const generateAge = () => getRandomInt(15, 50)

export const generateStat = ({ id, label, value }) => ({
  id,
  label,
  current: value,
  base: value,
})

export const generateCharacter = () => ({
  id: uuid(),
  name: generateName(),
  age: generateAge(),
  stats: [
    // Hit Points
    generateStat({
      id: STAT_ID.HP,
      label: `HP`,
      value: getRandomInt(30, 100), 
    }),
    
    // Action Points
    generateStat({
      id: STAT_ID.AP,
      label: `Stamina`,
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

export const appraiseCharacter = character => {
  return character.stats.reduce((prev, curr) => {
    return prev + (curr.id === STAT_ID.HP || curr.id === STAT_ID.AP ? Math.floor(curr.base / 10) : curr.base)
  }, 0)
}

export const generateCharacters = times(generateCharacter)