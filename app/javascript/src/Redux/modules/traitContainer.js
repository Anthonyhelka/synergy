const initialState = {
  traits: []
}

const traitContainer = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_LOAD_TRAITS:
      return {...state, traits: action.traits }
    default:
      return state
  }
}

const HANDLE_LOAD_TRAITS = 'HANDLE_LOAD_TRAITS'
const handleLoadTraits = (traits) => {
  return {
    type: HANDLE_LOAD_TRAITS,
    traits: traits
  }
}

const loadTraitContainer = (traits) => {
  return (dispatch) => {
    dispatch(handleLoadTraits(traits));
  }
}


export {
  traitContainer,
  loadTraitContainer
}
