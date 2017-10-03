const HUDTemplate = ({ name, coins, slaves }) => (
    <aside>
      <style jsx>{`
      `}</style>
      <h5>{ name }</h5>
      <hr />
      <p>Coins: { coins }</p>
      <p>Slaves: { slaves }</p>
    </aside>
)

export default HUDTemplate