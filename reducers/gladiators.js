const initialState = {
  foo: `bamdadd`,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'foo': 
      return {
        ...state,
        baz: `bosh!`
      }
    
    default: return state
  }
  
  return { bar:'baz'}
}