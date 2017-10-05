import CharacterCard from '../../atoms/character-card'

const BattleTemplate = ({ player, npc, onAttack }) => (
  <div>
    <style jsx>{`
      display: flex;
    `}</style>
    <CharacterCard character={player} />
    <button onClick={onAttack}>Attack >></button>
    <CharacterCard character={npc} />
  </div>
)

export default BattleTemplate