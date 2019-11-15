const initialState = {
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
  return dispatch => {
    dispatch(getChampionsRequest())

    return fetch('/api/v1/champions/overview')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(getChampionsRequestFailure())
      }
    })
    .then(champions => {
      debugger
      if(!champions.error) {
        dispatch(getChampionsRequestSuccess(champions))
      }
    })
  }
}

export {
  champions,
  getChampions,
}
