import { map } from 'ramda'
import CharacterCard from '../../atoms/character-card'

const renderSlave = slave => {
  return (
  <CharacterCard
    key={slave.id}
    character={slave}
  >
    Owned
  </CharacterCard>
)}

const LudusTemplate = ({ slaves }) => {
  return (
  <div>
    <style jsx>{`
      div {
        display: flex;
      }
    `}</style>
    { map(renderSlave, slaves.slaves) }
  </div>
)}

export default LudusTemplate