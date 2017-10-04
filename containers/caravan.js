import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pick, map } from 'ramda'

import * as PlayerActions from '../actions/player' 
import * as SlaveActions from '../actions/slave' 

import CaravanTemplate from '../components/templates/caravan'

import {
  mapIndexed,
} from '../utils/misc'

class CaravanContainer extends React.Component {
  prisonerPurchaseHandler({ prisoner, purchaseAction, addSlaveAction, playerCoins }) {
    if (playerCoins >= prisoner.value) {
      purchaseAction({ value: prisoner.value })
      addSlaveAction({ character: prisoner.character })
    }
  }
  
  render() {
    const { dispatch, player, caravan } = this.props
    const { coins: playerCoins } = player
    const playerActions = bindActionCreators(PlayerActions, dispatch)
    const slaveActions = bindActionCreators(SlaveActions, dispatch)
    const purchaseAction = playerActions.purchase
    const addSlaveAction = slaveActions.addSlave
    
    return (
      <CaravanTemplate
        prisoners={caravan.prisoners}
        purchaseHandler={({ prisoner }) => this.prisonerPurchaseHandler({ prisoner, purchaseAction, playerCoins, addSlaveAction })}
      />
    )
  }
}

export default connect(pick(['player', 'caravan']))(CaravanContainer)