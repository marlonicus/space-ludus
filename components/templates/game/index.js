import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import HUDContainer from '../../../containers/hud'
import LudusContainer from '../../../containers/ludus'
import CaravanContainer from '../../../containers/caravan'
import ArenaContainer from '../../../containers/arena'

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
    <Tabs>
      <TabList>
        <Tab><button>Ludus</button></Tab>
        <Tab><button>Caravan</button></Tab>
        <Tab><button>Arena</button></Tab>
      </TabList>
      
      <TabPanel><LudusContainer /></TabPanel>
      <TabPanel><CaravanContainer /></TabPanel>
      <TabPanel><ArenaContainer /></TabPanel>
    </Tabs>
  </div>
)

export default GameTemplate