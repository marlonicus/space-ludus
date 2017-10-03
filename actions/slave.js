export const ADD_SLAVE = `ADD_SLAVE`

export const addSlave = ({ character }) => ({
  type: ADD_SLAVE,
  payload: {
    character,
  },
})