import { map } from 'ramda'
import CharacterCard from '../../atoms/character-card'

const renderWarrior = ({ character }) => (
  <CharacterCard
    character={character}
  >
    <button>Fight!</button>
  </CharacterCard>
)

const ArenaTemplate = ({ warriors }) => (
  <div>
    <style jsx>{`
      .warriors {
        display: flex;
      }
    `}</style>
    {
      warriors.length ?
        <div class="warriors">
          { map(renderWarrior, warriors) }
        </div>
        :
        <p><em>There are no warriors to fight against today.</em></p>
    }
  </div>
)

export default ArenaTemplate