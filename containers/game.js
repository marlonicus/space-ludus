import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { prop, identity } from 'ramda'

import * as GameActions from '../actions/game' 
import { initStore } from '../reducers/index'

import GameTemplate from '../components/templates/game'
import MenuTemplate from '../components/templates/menu'

class GameContainer extends React.Component {
    render({ time, initialised, dispatch } = this.props) {
      const gameActions = bindActionCreators(GameActions, dispatch)
      
      return (
        initialised ? 
          <GameTemplate />
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
