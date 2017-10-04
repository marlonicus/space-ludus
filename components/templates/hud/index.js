const HUDTemplate = ({ name, coins, slaves, day, advanceTimeHandler }) => (
    <aside>
      <style jsx>{`
        aside {
          width: 160px;
        }
        
        h5 {
          text-align: center;
          margin-bottom: 0;
        }
        
        hr {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
      <h5>{ name }</h5>
      <hr />
      <p><b>Day:</b> { day }</p>
      <p><b>Coins:</b> { coins } <small>(-{slaves} per day)</small></p>
      <p><b>Slaves:</b> { slaves }</p>
      
      <button onClick={advanceTimeHandler}>End day ></button>
    </aside>
)

export default HUDTemplate