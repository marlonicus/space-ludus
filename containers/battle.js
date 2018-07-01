import { find, prop , pipe, equals, partial, propEq } from 'ramda'
import { connect } from 'react-redux'

import { injure } from '../actions/game'

import { 
  getStrengthCurrentValue,
  getHpCurrentValue,
  findCharacter,
} from '../utils/character'

import BattleTemplate from '../components/templates/battle'

class BattleContainer extends React.Component {  
  onPlayerAttack({ dispatch, player, npc }) {
    dispatch(injure({
      id: npc.id,
      damage: getStrengthCurrentValue(player),
    }))
  }
  
  getPlayerAndNpc() {
    const { slaves, warriors } = this.props
    const { playerId, npcId } = this.props.inBattle

    return { 
      player: findCharacter({ id: playerId, list: slaves }), 
      npc: findCharacter({ id: npcId, list: warriors }),
    } 
  }
  
  render() {
    const { dispatch } = this.props
    const { player, npc } = this.getPlayerAndNpc()
    
    return (
      <BattleTemplate
        player={player}
        npc={npc}
        onAttack={partial(this.onPlayerAttack, [{ dispatch, player, npc }])}
      />
    )
  }
}

export default connect(prop('game'))(BattleContainer)