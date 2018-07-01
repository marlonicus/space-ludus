import { connect } from 'react-redux'
import { prop } from 'ramda'

import { startBattle } from '../actions/game'

import ArenaTemplate from '../components/templates/arena'

class ArenaContainer extends React.Component {
  state = {
    choosingSlave: false,
  }
  
  fightStartHandler({ characterId: playerId }) {
    const { dispatch } = this.props
    
    dispatch(
      startBattle({ 
        playerId, 
        npcId: this.state.npcId 
      })
    )
  }
  
  fightInitiatedHandler({ characterId: npcId }) {
    this.setState({
      choosingSlave: true,
      npcId,
    })
  }
  
  render() {
    const { warriors, slaves, dispatch } = this.props
    const { choosingSlave } = this.state
    
    return (
      <ArenaTemplate
        choosingSlave={choosingSlave}
        warriors={warriors}
        slaves={slaves}
        fightInitiatedHandler={(...args) => this.fightInitiatedHandler(...args)}
        fightStartHandler={(...args) => this.fightStartHandler(...args)}
      />
    )
  }
}

export default connect(prop('game'))(ArenaContainer)