import { connect } from 'react-redux'
import { pick } from 'ramda'

import { dayAdvance } from '../actions/game'

import HUDTemplate from '../components/templates/hud'

import { generateCharacters } from '../utils/character'

class HUDContainer extends React.Component {
  render() {
    const { player, game, dispatch } = this.props
    
    return <HUDTemplate 
      name={player.name}
      coins={player.coins}
      day={game.day}
      slaves={player.slaves.length}
      advanceTimeHandler={() => dispatch(dayAdvance())}
    />
  }
}

export default connect(pick(['game', 'player']))(HUDContainer)