import { addIndex, map } from 'ramda'

/**
 * Picks random element from a given array
 */
export const pickRandomFromArray = array => array[Math.floor(Math.random() * array.length)]

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const mapIndexed = addIndex(map)