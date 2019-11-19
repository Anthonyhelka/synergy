import { combineReducers } from 'redux';

import { champions } from '../modules/champions';
import { championSearch } from '../modules/championSearch';
import { navigationBar } from '../modules/navigationBar';
import { homeContainer } from '../modules/homeContainer';

const rootReducer = combineReducers({
  champions,
  championSearch,
  navigationBar,
  homeContainer
});

export default rootReducer;
