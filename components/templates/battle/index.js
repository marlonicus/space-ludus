import CharacterCard from '../../atoms/character-card'

class BattleTemplate extends React.Component {
  render({ player, npc, onAttack } = this.props) {
    return (
      <div>
        <style jsx>{`
          display: flex;
        `}</style>
        
        <CharacterCard character={player} />
        <button onClick={onAttack}>Attack >></button>
        <CharacterCard character={npc} />
        
        {/* <div className={}></div> */}
      </div>
    )
  } 
}

export default BattleTemplate