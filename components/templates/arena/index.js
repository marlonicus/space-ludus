import { map, curry, ifElse, prop, pipe } from 'ramda'


import CharacterCard from '../../atoms/character-card'

const renderWarrior = ({ clickHandler, text }, character) => (
  <CharacterCard
    character={character}
    key={character.id}
  >
    <hr />
    <button onClick={() => clickHandler({ characterId: character.id }) }>{ text }</button>
  </CharacterCard>
)

const renderGroup = ({ renderFn, clickHandler, text, group, infoText, emptyText }) => {
  return group.length ? 
    <div>
      <style jsx>{`
        .list {
          display: flex;
        }
      `}</style>
      { infoText ? <p><em>{infoText}</em></p> : null }
      <div className="list">
      {
        map(
          curry(renderFn)({
            clickHandler,
            text,
          }), 
          group
        ) 
      }
      </div>
    </div>
    :
    <p><em>{ emptyText }</em></p>
}

const ArenaTemplate = ({ warriors, fightInitiatedHandler, fightStartHandler, choosingSlave, slaves }) => (
  <div>
    { 
      choosingSlave ? 
        renderGroup({
          renderFn: renderWarrior,
          clickHandler: fightStartHandler,
          text: `Choose`,
          infoText: `Choose one of your slaves to fight this warrior:`,
          emptyText: `You have no slaves to fight this warrior!`,
          group: slaves,
        })
        : 
        renderGroup({
          renderFn: renderWarrior,
          clickHandler: fightInitiatedHandler,
          text: `Fight`,
          emptyText: `There are no warriors to fight against today.`,
          group: warriors,
        })
    }
  </div>
)

export default ArenaTemplate