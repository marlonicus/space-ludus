import { connect } from 'react-redux'
import { pick } from 'ramda'

import HUDTemplate from '../components/templates/hud'

import { generateCharacters } from '../utils/character'

class HUDContainer extends React.Component {
  render() {
    const { player, game } = this.props
    
    return <HUDTemplate 
      name={player.name}
      coins={player.coins}
    />
  }
}

export default connect(pick(['game', 'player']))(HUDContainer)