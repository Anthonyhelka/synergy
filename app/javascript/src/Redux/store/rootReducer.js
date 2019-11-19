import { combineReducers } from 'redux';

import { champions } from '../modules/champions';
import { championSearch } from '../modules/championSearch';
import { navigationBar } from '../modules/navigationBar';

const rootReducer = combineReducers({
  champions,
  championSearch,
  navigationBar
});

export default rootReducer;
