import { mapIndexed } from '../../utils/misc'

const Stat = ({ label, base }, index) => (
  <div key={index}>
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
    
    <dt>{ label }</dt>
    <dd>{ base }</dd>
  </div>
)

const CharacterCard = ({ character, children }) => {
  const { name, age, stats } = character
  return (
    <card>
      <style jsx>{`
        card {
          margin-right: 10px;
          padding: 10px;
          margin-bottom: 0;
        }
      `}</style>
      <h2>{ name }</h2>
      <dl>
        <Stat label="Age" base={age} />
        { mapIndexed(Stat, stats) }
      </dl>
      { children }
    </card>
  )
}

export default CharacterCard