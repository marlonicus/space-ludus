const MenuTemplate = ({ onStartGame }) => {
  let nameNode = {}
  
  return (
    <main>
      <h1>Space Ludus</h1>
      <card>
        <p>What is your name?</p>
        <input ref={node => nameNode = node} type="text" placeholder="Marlonicus" />
      </card>
      <button onClick={() => {
        onStartGame({ name: nameNode.value || `Marlonicus` })
      }}>Begin</button>
    </main>
  )
}

export default MenuTemplate