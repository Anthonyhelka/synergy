const initialState = {
  champions: [],
  selectedColumn: 'cost',
  direction: 'ascending'
}

const championTable = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_LOAD_CHAMPIONS:
      return {...state, champions: action.champions }
    case CHANGE_COLUMN:
      return {...state, selectedColumn: action.selectedColumn, direction: 'ascending' }
    case CHANGE_DIRECTION:
      if (state.direction === 'ascending') {
        return {...state, direction: 'descending' }
      } else {
        return {...state, direction: 'ascending' }
      }
    default:
      return state;
  }
}

const HANDLE_LOAD_CHAMPIONS = 'HANDLE_LOAD_CHAMPIONS';
const handleLoadChampions = (champions) => {
  return {
    type: HANDLE_LOAD_CHAMPIONS,
    champions: champions
  }
}

const loadChampionTable = (champions) => {
  return (dispatch) => {
    dispatch(handleLoadChampions(champions));
  }
}

const CHANGE_COLUMN = 'CHANGE_COLUMN';
const changeColumn = (selectedColumn) => {
  return {
    type: CHANGE_COLUMN,
    selectedColumn: selectedColumn
  }
}

const CHANGE_DIRECTION= 'CHANGE_DIRECTION';
const changeDirection = () => {
  return {
    type: CHANGE_DIRECTION
  }
}

const handleSortChange = (event, selectedColumn) => {
  return (dispatch, getState) => {
    if (selectedColumn === getState().championTable.selectedColumn) {
      dispatch(changeDirection());
    } else {
      dispatch(changeColumn(selectedColumn));
    }
  }
}

export {
  championTable,
  loadChampionTable,
  handleSortChange
}
