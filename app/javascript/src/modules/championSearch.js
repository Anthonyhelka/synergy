const initialState = {
  query: '',
  filteredChampions: [],
  sort: 'up'
}

const championSearch = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_QUERY_CHANGE:
      return {...state, query: action.query }
    case FILTER_CHAMPIONS:
      return {...state, filteredChampions: action.filteredChampions }
    case HANDLE_SORT_CHANGE:
      if (state.sort === 'up') {
        return {...state, sort: 'down' }
      } else {
        return {...state, sort: 'up' }
      }
    default:
      return state
  }
}

const HANDLE_QUERY_CHANGE = 'HANDLE_QUERY_CHANGE'
const handleQueryChange = (query) => {
  return {
    type: HANDLE_QUERY_CHANGE,
    query: query
  }
}

const FILTER_CHAMPIONS = 'FILTER_CHAMPIONS'
const filterChampions = (filteredChampions) => {
  return {
    type: FILTER_CHAMPIONS,
    filteredChampions: filteredChampions
  }
}

const handleChampionSearch = (event) => {
  return (dispatch, getState) => {
    const query = (event.target.value).trim();
    dispatch(handleQueryChange(query));
    const champions = getState().champions.championList;
    const filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase())
    });
    dispatch(filterChampions(filteredChampions));
  }
}

const HANDLE_SORT_CHANGE = 'HANDLE_SORT_CHANGE'
const handleSortChange = () => {
  return {
    type: HANDLE_SORT_CHANGE
  }
}

export {
  championSearch,
  handleChampionSearch,
  handleSortChange
}
