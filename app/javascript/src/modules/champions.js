const initialState = {
  season: 1,
  championList: [],
  isFetching: false
}

const champions = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHAMPIONS_REQUEST:
      return {...state, isFetching: true }
    case GET_CHAMPIONS_REQUEST_SUCCESS:
      return {
        ...state,
        championList: action.champions,
        isFetching: false
      }
    case GET_CHAMPIONS_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case CHANGE_SEASON:
      if (state.season === 1) {
        return {...state, season: 2 }
      } else {
        return {...state, season: 1}
      }
    default:
      return state
  }
}

const GET_CHAMPIONS_REQUEST = 'GET_CHAMPIONS_REQUEST'
const getChampionsRequest = () => {
  return {
    type: GET_CHAMPIONS_REQUEST
  }
}

const GET_CHAMPIONS_REQUEST_SUCCESS = 'GET_CHAMPIONS_REQUEST_SUCCESS'
const getChampionsRequestSuccess = (champions) => {
  return {
    type: GET_CHAMPIONS_REQUEST_SUCCESS,
    champions: champions
  }
}

const GET_CHAMPIONS_REQUEST_FAILURE = 'GET_CHAMPIONS_REQUEST_FAILURE'
const getChampionsRequestFailure = () => {
  return {
    type: GET_CHAMPIONS_REQUEST_FAILURE
  }
}

const getChampions = () => {
  return (dispatch, getState) => {
    dispatch(getChampionsRequest())
    return fetch(`/api/v1/champions/season_${getState().champions.season}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(getChampionsRequestFailure())
      }
    })
    .then(response => {
      if(!response.error) {
        dispatch(getChampionsRequestSuccess(response.champions))
      }
    })
  }
}

const CHANGE_SEASON = 'CHANGE_SEASON'
const changeSeason = () => {
  return {
    type: CHANGE_SEASON
  }
}

const handleSeasonChange = (event, desiredSeason) => {
  return (dispatch, getState) => {
    if (desiredSeason !== getState().champions.season) {
      dispatch(changeSeason())
      dispatch(getChampions())
    }
  }
}

export {
  champions,
  getChampions,
  handleSeasonChange
}
