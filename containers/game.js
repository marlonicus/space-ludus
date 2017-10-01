import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { prop, identity } from 'ramda'
import { initStore } from '../reducers/index'
import MenuTemplate from '../components/templates/menu'
import MiddayContainer from '../containers/midday'
import * as GameActions from '../actions/game' 

class GameContainer extends React.Component {
    render({ time, initialised, dispatch } = this.props) {
      const gameActions = bindActionCreators(GameActions, dispatch)
      
      if (initialised) {
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

      return <MenuTemplate 
        onStartGame={gameActions.start}
      />
    }
}

export default withRedux(initStore, prop('game'))(GameContainer)
