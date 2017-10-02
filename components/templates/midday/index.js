import { curry } from 'ramda'
import { mapIndexed } from '../../../utils/misc'

const renderStat = ({ label, base }, index) => (
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

const renderForSale = (purchaseHandler, prisoner, index) => {
  const { name, age, stats, value } = prisoner
  return (
    <card key={index}>
      <style jsx>{`
        card {
          margin-right: 10px;
          padding: 10px;
          margin-bottom: 0;
        }
      `}</style>
      <h2>{ name }</h2>
      <dl>
        { renderStat({ label: `Age`, base: age }, `age`) }
        { mapIndexed(renderStat, stats) }
      </dl>
      <button onClick={() => purchaseHandler({ value })}>£{ value } - Purchase</button>
    </card>
  )
}

const MiddayTemplate = ({ prisoners, purchaseHandler }) => {
  const renderForSaleCurried = curry(renderForSale)(purchaseHandler)
  return (
    <div>
      <style jsx>{`
        .prisoners {
          display: flex;
        }
      `}</style>
      
      <h1>It's midday</h1>
      <p>A space caravan has arrived with some prisoners for sale:</p>
      
      <div className="prisoners">
        { mapIndexed(renderForSaleCurried, prisoners) }
      </div>
    </div>
  )
}

export default MiddayTemplate