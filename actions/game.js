export const GAME_START = `GAME_START`
export const DAY_ADVANCE = `DAY_ADVANCE`

export const dayAdvance = () => ({
  type: DAY_ADVANCE,
  payload: {
    numberOfPrisoners: Math.floor(Math.random() * 5) - 1,
  }
})

export const start = ({ name }) => ({
  type: GAME_START,
  payload: {
    name,
    numberOfPrisoners: 5,
  }
})