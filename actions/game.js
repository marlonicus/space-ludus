export const GAME_START = `GAME_START`
export const TIME_ADVANCE = `TIME_ADVANCE`

export const timeAdvance = () => ({
  type: TIME_ADVANCE,
})

export const start = ({ name }) => ({
  type: GAME_START,
  payload: {
    name,
  }
})