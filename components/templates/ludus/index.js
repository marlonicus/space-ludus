import { map } from 'ramda'
import CharacterCard from '../../atoms/character-card'

const renderSlave = slave => {
  return (
  <CharacterCard
    key={slave.id}
    character={slave}
  />
)}

const LudusTemplate = ({ slaves }) => {
  return (
  <div>
    <style jsx>{`
      .slaves {
        display: flex;
      }
    `}</style>
    { 
      slaves.length ? 
        <div class="slaves">
          { map(renderSlave, slaves) }
        </div>
        :
        [<p><em>Looks like you have no slaves!<br />Perhaps you should see if there are any for sale at the caravan.</em></p>]
    }
  </div>
)}

export default LudusTemplate