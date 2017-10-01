import withRedux from 'next-redux-wrapper'
import { prop, identity } from 'ramda'
import { initStore } from '../reducers/index'

import GameContainer from '../containers/game'

const Page = () => <GameContainer />

export default withRedux(initStore, identity)(Page)