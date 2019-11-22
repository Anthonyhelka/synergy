import { combineReducers } from 'redux';

import { data } from '../modules/data';
import { championSearch } from '../modules/championSearch';
import { navigationBar } from '../modules/navigationBar';
import { homeContainer } from '../modules/homeContainer';
import { championTable } from '../modules/championTable';
import { traitContainer } from '../modules/traitContainer';

const rootReducer = combineReducers({
  data,
  championSearch,
  navigationBar,
  homeContainer,
  championTable,
  traitContainer
});

export default rootReducer;
