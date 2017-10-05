import { STAT_ID } from '../constants/stats'
import { pick, find, prop , pipe, equals} from 'ramda'
import { connect } from 'react-redux'
import { getStrengthCurrentValue } from '../utils/character'

import BattleTemplate from '../components/templates/battle'

const withInjury = ({ character, damage }) => ({
  ...character,
  stats: character.stats.map(stat => {
    if (stat.id === STAT_ID.HP) {
      return {
        ...stat,
        current: stat.current - damage,
      }
    }
    return stat
  })
})

class BattleContainer extends React.Component {
  componentWillMount() {
    this.setState({
      player: this.props.game.inBattle.player,
      npc: this.props.game.inBattle.npc,
    })
    
    const character = this.props.game.inBattle.player
    
    console.log(`geStat: `, getStrengthCurrentValue(character))
  }
  
  checkDeath() {
    // if (getStatthis.state.npc)
  }
  
  render() {
    const { player, npc } = this.state
    return (
      <BattleTemplate
        player={player}
        npc={npc}
        onAttack={() => {
          this.setState({
            npc: withInjury({
              character: this.state.npc,
              damage: getStrengthCurrentValue(player),
            })
          }, () => {
            this.checkDeath()
          })
        }}
      />
    )
  }
}

export default connect(pick(['game']))(BattleContainer)