import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { getChampions } from './Redux/modules/champions';
import HomeContainer from './MainPages/HomeContainer';
import ChampionsOverview from  './ChampionsOverview/ChampionsOverview';
import ChampionsOrigins from  './Traits/ChampionsOrigins';
import ChampionsClasses from  './Traits/ChampionsClasses';
import ChampionShow from  './ChampionShow/ChampionShow';
import ItemsContainer from  './MainPages/ItemsContainer';
import SummonerShow from './/Summoner/SummonerShow';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getChampions();
  }

  render(){
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path='/' component={HomeContainer}/>
          <Route path='/champions' component={ChampionsOverview}/>
          <Route path='/champions/overview' component={ChampionsOverview}/>
          <Route path='/champions/origins' component={ChampionsOrigins}/>
          <Route path='/champions/classes' component={ChampionsClasses}/>
          <Route path='/champions/:key' component={ChampionShow}/>
          <Route path='/items' component={ItemsContainer}/>
          <Route path='/summoner/:name' component={SummonerShow}/>
        </Router>
      </Provider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChampions: () => dispatch(getChampions())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
