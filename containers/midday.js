import MiddayTemplate from '../components/templates/midday'

import { generateCharacters } from '../utils/character'

class MiddayContainer extends React.Component {
  componentWillMount() {
    this.setState({
      prisoners: generateCharacters(5),
    })
  }
  
  render() {
    return <MiddayTemplate
      prisoners={this.state.prisoners}
    />
  }
}

export default MiddayContainer