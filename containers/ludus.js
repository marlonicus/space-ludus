import { connect } from 'react-redux'
import { pick } from 'ramda'

import LudusTemplate from '../components/templates/ludus'

class LudusContainer extends React.Component {
  render() {
    const { game } = this.props
    return (
      <LudusTemplate
        slaves={game.slaves} 
      />
    )
  }
}

export default connect(pick(['game']))(LudusContainer)