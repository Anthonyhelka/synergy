const initialState = {
  champions: [],
  query: '',
  filteredChampions: [],
  sort: 'up'
}

const championSearch = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_LOAD_CHAMPIONS:
      return {...state, champions: action.champions, filteredChampions: action.champions }
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
    case CLEAR_SEARCH:
      return {...state, query: '' }
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

const loadChampionSearch = (champions) => {
  return (dispatch) => {
    dispatch(clearChampionSearch());
    dispatch(handleLoadChampions(champions));
  }
}

const HANDLE_QUERY_CHANGE = 'HANDLE_QUERY_CHANGE';
const handleQueryChange = (query) => {
  return {
    type: HANDLE_QUERY_CHANGE,
    query: query
  }
}

const FILTER_CHAMPIONS = 'FILTER_CHAMPIONS';
const filterChampions = (filteredChampions) => {
  return {
    type: FILTER_CHAMPIONS,
    filteredChampions: filteredChampions
  }
}

const handleChampionSearch = (event) => {
  return (dispatch, getState) => {
    let query;
    (event.target.value.trim()) ? query = event.target.value : query = event.target.value.trim();
    dispatch(handleQueryChange(query));
    const champions = getState().championSearch.champions;
    const filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase());
    });
    dispatch(filterChampions(filteredChampions));
  }
}

const HANDLE_SORT_CHANGE = 'HANDLE_SORT_CHANGE';
const handleSortChange = () => {
  return {
    type: HANDLE_SORT_CHANGE
  }
}

const CLEAR_SEARCH = 'CLEAR_SEARCH';
const clearChampionSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}

export {
  championSearch,
  loadChampionSearch,
  handleChampionSearch,
  handleSortChange,
  clearChampionSearch
}
