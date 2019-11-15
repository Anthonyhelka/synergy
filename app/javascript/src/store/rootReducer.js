import { combineReducers } from 'redux';

import { champions } from '../modules/champions';

const rootReducer = combineReducers({
  champions
});

export default rootReducer;
