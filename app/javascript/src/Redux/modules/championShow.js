import { browserHistory } from 'react-router';

const initialState = {
  champion: {},
  isFetching: false,
  fetched: false
}

const championShow = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHAMPION_REQUEST:
      return {...state, isFetching: true }
    case GET_CHAMPION_REQUEST_SUCCESS:
      return {...state, champion: action.champion, isFetching: false, fetched: true}
    case GET_CHAMPION_REQUEST_FAILURE:
      return {...state, isFetching: false }
    default:
      return state;
  }
}

const GET_CHAMPION_REQUEST = 'GET_CHAMPION_REQUEST';
const getChampionRequest = () => {
  return {
    type: GET_CHAMPION_REQUEST
  }
}

const GET_CHAMPION_REQUEST_SUCCESS = 'GET_CHAMPION_REQUEST_SUCCESS';
const getChampionRequestSuccess = (champion) => {
  return {
    type: GET_CHAMPION_REQUEST_SUCCESS,
    champion: champion
  }
}

const GET_CHAMPION_REQUEST_FAILURE = 'GET_CHAMPION_REQUEST_FAILURE';
const getChampionRequestFailure = () => {
  return {
    type: GET_CHAMPION_REQUEST_FAILURE
  }
}

const getChampion = (championKey) => {
  return (dispatch, getState) => {
    dispatch(getChampionRequest());
    return fetch(`/api/v1/champions/${championKey}_${getState().data.season}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        dispatch(getChampionRequestFailure());
      }
    })
    .then(response => {
      if(!response.error) {
        if (response.champion.length === 0) {
          dispatch(handleChampionShowRedirect());
        } else {
          window.scrollTo(0,0);
          browserHistory.push(`/champions/${championKey}`);
          dispatch(getChampionRequestSuccess(response.champion[0]));
        }
      }
    })
  }
}

const handleChampionShowRedirect = () => {
  return (dispatch) => {
    browserHistory.push(`/champions`);
  }
}

export {
  championShow,
  getChampion,
  handleChampionShowRedirect
}
