import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import HomeContainer from './MainPages/HomeContainer';
import ChampionsOverview from  './Overview/ChampionsOverview';
import ChampionsOrigins from  './Traits/ChampionsOrigins';
import ChampionsClasses from  './Traits/ChampionsClasses';
import ChampionShow from  './Show/ChampionShow';
import ItemsContainer from  './MainPages/ItemsContainer';
import NewsContainer from  './MainPages/NewsContainer';
import SummonerShow from './/Summoner/SummonerShow';


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
          <Route path='/champions/:key' component={ChampionShow}/>
          <Route path='/items' component={ItemsContainer}/>
          <Route path='/news' component={NewsContainer}/>
          <Route path='/summoner/:name' component={SummonerShow}/>
        </Router>
      </div>
    )
  }
}

export default App;
