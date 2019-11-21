import { combineReducers } from 'redux';

import { champions } from '../modules/champions';
import { championSearch } from '../modules/championSearch';
import { navigationBar } from '../modules/navigationBar';
import { homeContainer } from '../modules/homeContainer';
import { championTable } from '../modules/championTable';

const rootReducer = combineReducers({
  champions,
  championSearch,
  navigationBar,
  homeContainer,
  championTable
});

export default rootReducer;
