import { connect } from 'react-redux'
import { pick } from 'ramda'

import { startBattle } from '../actions/game'

import ArenaTemplate from '../components/templates/arena'

class ArenaContainer extends React.Component {
  state = {
    choosingSlave: false,
  }
  
  render() {
    const { arena, player, dispatch } = this.props
    const { choosingSlave } = this.state
    
    return (
      <ArenaTemplate
        choosingSlave={choosingSlave}
        warriors={arena.warriors}
        slaves={player.slaves}
        fightInitiatedHandler={({ character: npc }) => {
          this.setState({
            choosingSlave: true,
            npc,
          })
        }}
        fightStartHandler={({ character: player }) => {
          dispatch(startBattle({ player, npc: this.state.npc }))
        }}
      />
    )
  }
}

export default connect(pick(['arena', 'player']))(ArenaContainer)