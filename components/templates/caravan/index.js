import { curry } from 'ramda'
import { mapIndexed } from '../../../utils/misc'
import CharacterCard from '../../atoms/character-card'

const renderForSale = (purchaseHandler, prisoner, index) => {
  return (
  <CharacterCard
    key={index}
    character={prisoner.character}>
      <button disabled={!prisoner.available} onClick={() => purchaseHandler({ prisoner })}>
        { prisoner.available ? `£${ prisoner.value } - Purchase` : `Purchased!` }
      </button>
  </CharacterCard>
)
}

const CaravanTemplate = ({ prisoners, purchaseHandler }) => {
  const renderForSaleCurried = curry(renderForSale)(purchaseHandler)
  return (
    <div>
      <style jsx>{`
        .prisoners {
          display: flex;
        }
      `}</style>
      {
        prisoners.length ?
          <p><em>"Only the finest slaves for sale 'ere "</em></p>
          :
          <p><em>"No prisoners for sale today I'm afraid..."</em></p>
      }
      
      <div className="prisoners">
        { mapIndexed(renderForSaleCurried, prisoners) }
      </div>
    </div>
  )
}

export default CaravanTemplate