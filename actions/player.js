export const PURCHASE = `PURCHASE`

export const purchase = ({ value }) => ({
  type: PURCHASE,
  payload: {
    value,
  }
})