const initialState = {
  backgroundList: ['yasuo'],
  background: ''
}

const homeContainer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BACKGROUND:
      return {...state, background: action.background }
    case REMOVE_BACKGROUND:
      return {...state, background: '' }
    default:
      return state
  }
}

const SET_BACKGROUND = 'SET_BACKGROUND'
const setBackground = (background) => {
  return {
    type: SET_BACKGROUND,
    background: background
  }
}

const REMOVE_BACKGROUND = 'REMOVE_BACKGROUND'
const removeBackground = () => {
  return {
    type: REMOVE_BACKGROUND
  }
}

const handleBackground = (action, documentBody) => {
  return (dispatch, getState) => {
    if (action === 'mount') {
      const background = getState().homeContainer.backgroundList[Math.floor(Math.random() * getState().homeContainer.backgroundList.length)];
      documentBody.classList.add(`black-background-color`);
      documentBody.classList.add(`background-${background}`);
      dispatch(setBackground(background));
    } else if (action === 'unmount') {
      documentBody.classList.remove(`black-background-color`);
      documentBody.classList.remove(`background-${getState().homeContainer.background}`);
      dispatch(removeBackground());
    }
  }
}

export {
  homeContainer,
  handleBackground
}
