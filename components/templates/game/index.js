import HUDContainer from '../../../containers/hud'

export const GameTemplate = ({ children }) => (
  <div className="wrapper">
    <style jsx>{`
      .wrapper {
        display: flex;
      }
      
      .hud {
        flex-basis: 10%;
        padding: 20px;
        margin-right: 20px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
      }
    `}</style>
    <div className="hud">
      <HUDContainer />
    </div>
    { children }
  </div>
)

export default GameTemplate