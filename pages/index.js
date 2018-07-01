import withRedux from "next-redux-wrapper"
import { prop, identity } from "ramda"
import { initStore } from "../reducers/index"

import Styles from "../styles"
import GameContainer from "../containers/game"

const Page = () => (
	<main>
		<Styles />
		<GameContainer />
	</main>
)

export default withRedux(initStore, identity)(Page)
