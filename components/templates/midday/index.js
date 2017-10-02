import { mapIndexed } from '../../../utils/misc'

const renderStat = ({ label, base }) => (
  <div>
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

const renderForSale = ({ name, age, stats }, index) => (
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
      { mapIndexed(renderStat, stats) }
    </dl>
  </card>
)

const MiddayTemplate = ({ prisoners }) => (
  <div>
    <style jsx>{`
      .prisoners {
        display: flex;
      }
    `}</style>
    
    <h1>It's midday</h1>
    <p>A space caravan has arrived with some prisoners for sale:</p>
    
    <div class="prisoners">
      { mapIndexed(renderForSale, prisoners) }
    </div>
  </div>
)

export default MiddayTemplate