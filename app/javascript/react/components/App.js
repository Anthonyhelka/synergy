import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import HomeContainer from './HomeContainer';
import ChampionsOverview from  './ChampionsOverview';
import ChampionsOrigins from  './Synergies/ChampionsOrigins';
import ChampionsClasses from  './Synergies/ChampionsClasses';
import ChampionShow from  './ChampionShow/ChampionShow';
import ItemsContainer from  './ItemsContainer';
import NewsContainer from  './NewsContainer';
import SummonerShow from './SummonerShow';


class App extends Component {
  render(){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={HomeContainer}/>
          <Route path='/champions' component={ChampionsOverview}/>
          <Route path='/champions/overview' component={ChampionsOverview}/>
          <Route path='/champions/origins' component={ChampionsOrigins}/>
          <Route path='/champions/classes' component={ChampionsClasses}/>
          <Route path='/champions/:name' component={ChampionShow}/>
          <Route path='/items' component={ItemsContainer}/>
          <Route path='/news' component={NewsContainer}/>
          <Route path='/summoner/:name' component={SummonerShow}/>
        </Router>
      </div>
    )
  }
}

export default App;
