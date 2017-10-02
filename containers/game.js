import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { prop, identity } from 'ramda'

import * as GameActions from '../actions/game' 
import { initStore } from '../reducers/index'

import MiddayContainer from '../containers/midday'

import GameTemplate from '../components/templates/game'
import MenuTemplate from '../components/templates/menu'

export const renderGameContent = ({ time }) => {
  switch (time) {
    case 0:
      return <h1>Night</h1>
    case 1:
      return <h1>Morning</h1>
    case 2:
      return <MiddayContainer />
    case 3:
      return <h1>Evening</h1>
  }
}

class GameContainer extends React.Component {
    render({ time, initialised, dispatch } = this.props) {
      const gameActions = bindActionCreators(GameActions, dispatch)
      
      return (
        initialised ? 
          <GameTemplate>
            { renderGameContent({ time }) }
          </GameTemplate>
          :
          <MenuTemplate 
            onStartGame={({ name }) => {
              gameActions.start({ name })
            }}
          />
      )
    }
}

export default connect(prop('game'))(GameContainer)
