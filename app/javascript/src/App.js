import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { getData } from './Redux/modules/data';
import HomeContainer from './MainPages/HomeContainer';
import ChampionTableContainer from  './ChampionTable/ChampionTableContainer';
import TraitContainer from  './Traits/TraitContainer';
import ChampionShowContainer from  './ChampionShow/ChampionShowContainer';
import ItemsContainer from  './MainPages/ItemsContainer';
import SummonerShow from './SummonerShow/SummonerShow';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render(){
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path='/' component={HomeContainer}/>
          <Route path='/champions' component={ChampionTableContainer}/>
          <Route path='/champions/traits' component={TraitContainer}/>
          <Route path='/champions/:key' component={ChampionShowContainer}/>
          <Route path='/items' component={ItemsContainer}/>
          <Route path='/summoner/:name' component={SummonerShow}/>
        </Router>
      </Provider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
