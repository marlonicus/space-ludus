import { connect } from 'react-redux'
import { pick } from 'ramda'

import LudusTemplate from '../components/templates/ludus'

class LudusContainer extends React.Component {
  render() {
    const { player } = this.props
    return (
      <LudusTemplate
        slaves={player.slaves} 
      />
    )
  }
}

export default connect(pick(['player']))(LudusContainer)