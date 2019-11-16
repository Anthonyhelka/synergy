import { combineReducers } from 'redux';

import { champions } from '../modules/champions';
import { championSearch } from '../modules/championSearch';

const rootReducer = combineReducers({
  champions,
  championSearch
});

export default rootReducer;
