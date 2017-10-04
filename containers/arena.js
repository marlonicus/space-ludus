import { connect } from 'react-redux'
import { pick } from 'ramda'

import ArenaTemplate from '../components/templates/arena'

class ArenaContainer extends React.Component {
  render() {
    const { arena } = this.props
    return (
      <ArenaTemplate
        warriors={arena.warriors}
      />
    )
  }
}

export default connect(pick(['arena']))(ArenaContainer)