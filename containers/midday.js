import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PlayerActions from '../actions/player' 

import MiddayTemplate from '../components/templates/midday'

import { 
  generateCharacters,
  appraiseCharacter,
} from '../utils/character'

class MiddayContainer extends React.Component {
  componentWillMount() {
    this.setState({
      prisoners: generateCharacters(5).map(character => ({
            ...character,
            value: appraiseCharacter(character),
      })),
    })
  }
  
  render() {
    const { dispatch } = this.props
    const playerActions = bindActionCreators(PlayerActions, dispatch)
    
    return <MiddayTemplate
      prisoners={this.state.prisoners}
      purchaseHandler={({ value }) => playerActions.purchase({ value })}
    />
  }
}

export default connect()(MiddayContainer)