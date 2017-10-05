export const BATTLE_START = `BATTLE_START`

export const startBattle = ({ player, npc }) => ({
  type: BATTLE_START,
  payload: {
    player,
    npc,
  }
})