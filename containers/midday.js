import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pick, map } from 'ramda'

import * as PlayerActions from '../actions/player' 
import * as SlaveActions from '../actions/slave' 

import MiddayTemplate from '../components/templates/midday'

import { 
  generateCharacters,
  appraiseCharacter,
} from '../utils/character'

import {
  mapIndexed,
} from '../utils/misc'

const applyPrisonerProps = character => ({
  state: character,
  available: true,
  value: appraiseCharacter(character),
})

class MiddayContainer extends React.Component {
  componentWillMount() {
    this.setState({
      prisoners: map(applyPrisonerProps, generateCharacters(5)),
    })
  }
  
  removePrisoner({ prisonerId }) {
    const { prisoners } = this.state
    this.setState({
      prisoners: map(prisoner => ({
          ...prisoner,
          available: prisoner.state.id === prisonerId ? false : prisoner.available,
      }), prisoners)
    })
  }
  
  prisonerPurchaseHandler({ prisoner, purchaseAction, addSlaveAction, playerCoins }) {
    if (playerCoins >= prisoner.value) {
      purchaseAction({ value: prisoner.value })
      addSlaveAction({ character: prisoner.state })
      this.removePrisoner({ prisonerId: prisoner.state.id })
    }
  }
  
  render() {
    const { dispatch, player } = this.props
    const { coins: playerCoins } = player
    const playerActions = bindActionCreators(PlayerActions, dispatch)
    const slaveActions = bindActionCreators(SlaveActions, dispatch)
    const purchaseAction = playerActions.purchase
    const addSlaveAction = slaveActions.addSlave
    
    return <MiddayTemplate
      prisoners={this.state.prisoners}
      purchaseHandler={({ prisoner }) => this.prisonerPurchaseHandler({ prisoner, purchaseAction, playerCoins, addSlaveAction })}
    />
  }
}

export default connect(pick(['player']))(MiddayContainer)