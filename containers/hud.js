import { connect } from 'react-redux'
import { pick } from 'ramda'

import HUDTemplate from '../components/templates/hud'

import { generateCharacters } from '../utils/character'

class HUDContainer extends React.Component {
  render() {
    const { player, game, slaves } = this.props
    
    return <HUDTemplate 
      name={player.name}
      coins={player.coins}
      slaves={slaves.slaves.length}
    />
  }
}

export default connect(pick(['game', 'player', 'slaves']))(HUDContainer)