const initialState = {
  summoner: {},
  message: {type: '', content: ''},
  valid: false,
  isFetching: false
}

const summonerShow = (state = initialState, action) => {
  switch(action.type) {
    case GET_SUMMONER_REQUEST:
      return {...state, isFetching: true }
    case GET_SUMMONER_REQUEST_SUCCESS:
      return {...state, isFetching: false}
    case GET_SUMMONER_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case SET_SUMMONER:
      return {...state, summoner: action.summoner }
    case SET_MESSAGE:
      return {...state, message: action.message }
    case SET_VALIDITY:
      return {...state, valid: action.validity }
    default:
      return state;
  }
}

const GET_SUMMONER_REQUEST = 'GET_SUMMONER_REQUEST';
const getSummonerRequest = () => {
  return {
    type: GET_SUMMONER_REQUEST
  }
}

const GET_SUMMONER_REQUEST_SUCCESS = 'GET_SUMMONER_REQUEST_SUCCESS';
const getSummonerRequestSuccess = () => {
  return {
    type: GET_SUMMONER_REQUEST_SUCCESS
  }
}

const GET_SUMMONER_REQUEST_FAILURE = 'GET_SUMMONER_REQUEST_FAILURE';
const getSummonerRequestFailure = () => {
  return {
    type: GET_SUMMONER_REQUEST_FAILURE
  }
}

const SET_SUMMONER = 'SET_SUMMONER';
const setSummoner = (summoner) => {
  return {
    type: SET_SUMMONER,
    summoner: summoner
  }
}

const SET_MESSAGE = 'SET_MESSAGE';
const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    message: message
  }
}

const SET_VALIDITY = 'SET_VALIDITY';
const setValidity = (validity) => {
  return {
    type: SET_VALIDITY,
    validity: validity
  }
}

const getSummoner = (summonerName) => {
  return (dispatch) => {
    dispatch(getSummonerRequest())
    return fetch(`/api/v1/summoner/${summonerName}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(getSummonerRequestFailure())
      }
    })
    .then(response => {
      if(!response.error) {
        dispatch(setSummoner(response.summoner));
        dispatch(setMessage(response.message));
        dispatch(setValidity(response.valid));
        dispatch(getSummonerRequestSuccess());
      }
    })
  }
}

const updateSummoner = () => {
  return (dispatch, getState) => {
    if (new Date() - new Date(getState().summonerShow.summoner.updated_at) >= (5 * 60 * 1000)) {
      dispatch(getSummonerRequest())
      return fetch(`/api/v1/summoner/${getState().summonerShow.summoner.summoner_id}`, { method: 'PUT', body: JSON.stringify({ region: getState().summonerShow.summoner.region }), headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          dispatch(getSummonerRequestFailure())
        }
      })
      .then(response => {
        if(!response.error) {
          dispatch(setSummoner(response.summoner));
          dispatch(setMessage(response.message));
          dispatch(setValidity(response.valid));
          dispatch(getSummonerRequestSuccess());
        }
      })
    } else {
      let millisecondsRemaining = new Date() - new Date(getState().summonerShow.summoner.updated_at) - (5 * 60 * 1000);
      let secondsRemaining = (Math.abs(millisecondsRemaining) / 1000).toFixed(0);
      let message = { type: 'Error', content: `You just updated! You can update again in ${secondsRemaining} seconds!` };
      dispatch(setMessage(message));
    }
  }
}

export {
  summonerShow,
  getSummoner,
  updateSummoner
}
