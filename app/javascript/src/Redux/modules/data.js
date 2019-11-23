import { loadChampionSearch } from './championSearch.js';
import { loadChampionTable } from './championTable.js';
import { loadTraitContainer } from './traitContainer.js';
import { handleChampionShowRedirect } from './championShow.js';

const initialState = {
  season: 1,
  isFetching: false
}

const data = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_REQUEST:
      return {...state, isFetching: true }
    case GET_DATA_REQUEST_SUCCESS:
      return {...state, isFetching: false}
    case GET_DATA_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case CHANGE_SEASON:
      return {...state, season: action.desiredSeason }
    default:
      return state
  }
}

const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST
  }
}

const GET_DATA_REQUEST_SUCCESS = 'GET_DATA_REQUEST_SUCCESS'
const getDataRequestSuccess = () => {
  return {
    type: GET_DATA_REQUEST_SUCCESS
  }
}

const GET_DATA_REQUEST_FAILURE = 'GET_DATA_REQUEST_FAILURE'
const getDataRequestFailure = () => {
  return {
    type: GET_DATA_REQUEST_FAILURE
  }
}

const getData = () => {
  return (dispatch, getState) => {
    dispatch(getDataRequest())
    return fetch(`/api/v1/champions/season_${getState().data.season}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(getDataRequestFailure())
      }
    })
    .then(response => {
      if(!response.error) {
        dispatch(loadChampionSearch(response.champions))
        dispatch(loadChampionTable(response.champions))
        dispatch(loadTraitContainer(response.traits))
        dispatch(getDataRequestSuccess())
      }
    })
  }
}

const CHANGE_SEASON = 'CHANGE_SEASON'
const changeSeason = (desiredSeason) => {
  return {
    type: CHANGE_SEASON,
    desiredSeason: desiredSeason
  }
}

const handleSeasonChange = (event, desiredSeason) => {
  return (dispatch, getState) => {
    if (desiredSeason !== getState().data.season) {
      dispatch(changeSeason(desiredSeason))
      if (window.location.pathname.startsWith('/champions/') && window.location.pathname !== '/champions/traits') {
        dispatch(handleChampionShowRedirect())
      }
      dispatch(getData())
    }
  }
}

export {
  data,
  getData,
  handleSeasonChange
}
