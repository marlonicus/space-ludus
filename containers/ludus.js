import { connect } from 'react-redux'
import { pick } from 'ramda'

import LudusTemplate from '../components/templates/ludus'

class LudusContainer extends React.Component {
  render() {
    return (
      <LudusTemplate
        slaves={this.props.slaves} 
      />
    )
  }
}

export default connect(pick(['slaves']))(LudusContainer)