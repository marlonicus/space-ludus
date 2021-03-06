export const GAME_START = `GAME_START`
export const DAY_ADVANCE = `DAY_ADVANCE`
export const BATTLE_START = `BATTLE_START`
export const PURCHASE = `PURCHASE`
export const INJURE = `INJURE`

export const injure = ({ id, damage }) => ({
  type: INJURE,
  payload: {
    id,
    damage,
  }
})

export const purchase = ({ value }) => ({
  type: PURCHASE,
  payload: {
    value,
  }
})

export const startBattle = ({ playerId, npcId }) => ({
  type: BATTLE_START,
  payload: {
    playerId,
    npcId,
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