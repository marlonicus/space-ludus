import HUDContainer from '../../../containers/hud'

export const GameTemplate = ({ children }) => (
  <div class="wrapper">
    <style jsx>{`
      .wrapper {
        display: flex;
      }
    `}</style>
    <div class="hud">
      <HUDContainer />
    </div>
    { children }
  </div>
)

export default GameTemplate