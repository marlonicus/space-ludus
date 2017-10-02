const MenuTemplate = ({ onStartGame }) => (
  <main>
    <h1>Space Ludus</h1>
    <card>
      <p>What is your name?</p>
      <input type="text" placeholder="Marlonicus" />
    </card>
    <button onClick={onStartGame}>Begin</button>
  </main>
)

export default MenuTemplate