import { NAMES } from '../constants/names' 
import { STAT_ID } from '../constants/stats' 

import { times } from 'ramda'

import { 
  pickRandomFromArray,
  getRandomInt,
} from './misc'


export const generateName = () => pickRandomFromArray(NAMES)

export const generateAge = () => getRandomInt(15, 60)

export const generateStat = ({ id, label, value }) => ({
  id,
  label,
  current: value,
  base: value,
})

export const generateCharacter = () => ({
  name: generateName(),
  age: generateAge(),
  stats: [
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

export const generateCharacters = times(generateCharacter)