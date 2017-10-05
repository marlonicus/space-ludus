export const GAME_START = `GAME_START`
export const DAY_ADVANCE = `DAY_ADVANCE`
export const BATTLE_START = `BATTLE_START`
export const PURCHASE = `PURCHASE`

export const purchase = ({ value }) => ({
  type: PURCHASE,
  payload: {
    value,
  }
})

export const startBattle = ({ player, npc }) => ({
  type: BATTLE_START,
  payload: {
    player,
    npc,
  }
})

export const dayAdvance = () => ({
  type: DAY_ADVANCE,
  payload: {
    numberOfPrisoners: Math.floor(Math.random() * 5) - 1,
    numberOfWarriors: Math.floor(Math.random() * 5) - 1,
  }
})

export const start = ({ name }) => ({
  type: GAME_START,
  payload: {
    name,
    numberOfPrisoners: 5,
    numberOfWarriors: 3,
  }
})