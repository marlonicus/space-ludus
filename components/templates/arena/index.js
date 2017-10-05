import { map, curry, ifElse, prop, pipe } from 'ramda'
import CharacterCard from '../../atoms/character-card'

const renderWarrior = ({ clickHandler, text }, character) => (
  <CharacterCard
    character={character}
    key={character.id}
  >
    <hr />
    <button onClick={() => clickHandler({ character }) }>{ text }</button>
  </CharacterCard>
)

const renderWarriors = ({ fightInitiatedHandler, warriors }) => {
  return warriors.length ?
    <div>
      <style jsx>{`
        display: flex;
      `}</style>
      { 
        map(
          pipe(
            prop('character'),
            curry(renderWarrior)({
              clickHandler: fightInitiatedHandler,
              text: `Fight`,
            })
          ), warriors) 
      }
    </div> 
    :
    <p><em>There are no warriors to fight against today.</em></p>
}

const renderSlaves = ({ slaves, fightStartHandler }) => {
  return slaves.length ?
    <div>
      <style jsx>{`
        .list {
          display: flex;
        }
      `}</style>
      <p>Choose one of your slaves to fight this warrior:</p>
      <div className="list">
      { 
        map(curry(renderWarrior)({
          clickHandler: fightStartHandler,
          text: `Choose`,
        }), slaves) 
      }
    </div>
    </div> 
    :
    <p><em>You have no slaves to fight this warrior!</em></p>
}

const ArenaTemplate = ({ warriors, fightInitiatedHandler, fightStartHandler, choosingSlave, slaves }) => (
  <div>
    { choosingSlave ? renderSlaves({ slaves, fightStartHandler }) : renderWarriors({ warriors, fightInitiatedHandler }) }
  </div>
)

export default ArenaTemplate