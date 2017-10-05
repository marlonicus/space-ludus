import { connect } from 'react-redux'
import { pick, partial } from 'ramda'

import { dayAdvance } from '../actions/game'

import HUDTemplate from '../components/templates/hud'

import { generateCharacters } from '../utils/character'

class HUDContainer extends React.Component {
  render() {
    const { game, dispatch } = this.props
    
    return <HUDTemplate 
      name={game.name}
      coins={game.coins}
      day={game.day}
      slaves={game.slaves.length}
      advanceTimeHandler={partial(dispatch, [dayAdvance()])}
    />
  }
}

export default connect(pick(['game']))(HUDContainer)