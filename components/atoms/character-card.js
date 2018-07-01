import { STAT_ID } from '../../constants/stats'

import { mapIndexed } from '../../utils/misc'

const Stat = ({ id, label, base, current }, index) => (
  <div key={index}>
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
      }
      
      dt {
        font-weight: bold;
      }
    `}</style>
    
    <dt>{ label }</dt>
    <dd>{
      id === STAT_ID.HP || id === STAT_ID.AP ? `${current} / ` : ``
    }{ base }</dd>
  </div>
)

const CharacterCard = ({ character, children }) => {
  const { name, age, stats } = character
  return (
    <card className={character.isAlive ? '' : 'dead' }>
      <style jsx>{`
        card {
          margin-right: 10px;
          padding: 10px;
          margin-bottom: 0;
          position: relative;
        }
        
        .dead {
          opacity: 0.6;
        }
        
        .dead:before {
            content: '';
            display: block;
            background: red;
            opacity: 0.2;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      `}</style>
      <h2>{ name }</h2>
      <dl>
        <Stat label="Age" base={age} />
        <hr />
        { mapIndexed(Stat, stats) }
      </dl>
      { children }
    </card>
  )
}

export default CharacterCard