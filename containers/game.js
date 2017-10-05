import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { prop, identity } from 'ramda'

import * as GameActions from '../actions/game' 
import { initStore } from '../reducers/index'

import GameTemplate from '../components/templates/game'
import MenuTemplate from '../components/templates/menu'

class GameContainer extends React.Component {
    render() {
      const { time, initialised, dispatch, inBattle } = this.props
      const gameActions = bindActionCreators(GameActions, dispatch)
      
      return (
        initialised ? 
          <GameTemplate inBattle={inBattle} />
          :
          <MenuTemplate 
            onStartGame={({ name }) => gameActions.start({ name })}
          />
      )
    }
}

export default connect(prop('game'))(GameContainer)
