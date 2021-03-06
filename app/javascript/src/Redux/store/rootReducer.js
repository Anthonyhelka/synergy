import { combineReducers } from 'redux';

import { data } from '../modules/data';
import { championSearch } from '../modules/championSearch';
import { navigationBar } from '../modules/navigationBar';
import { homeContainer } from '../modules/homeContainer';
import { championTable } from '../modules/championTable';
import { traitContainer } from '../modules/traitContainer';
import { championShow } from '../modules/championShow';
import { summonerShow } from '../modules/summonerShow';

const rootReducer = combineReducers({
  data,
  championSearch,
  navigationBar,
  homeContainer,
  championTable,
  traitContainer,
  championShow,
  summonerShow
});

export default rootReducer;
