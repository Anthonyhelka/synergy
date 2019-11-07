import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import ChampionShowTileDesktop from './ChampionShowTileDesktop';
import ChampionShowTileMobile from './ChampionShowTileMobile';

class ChampionShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      championKey: '',
      champion: {},
      updated: false
    }
    this.getData = this.getData.bind(this);
  }

  getData(championKey) {
    fetch(`/api/v1/champions/${championKey}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ championKey: championKey, champion: body.champion[0], updated: true });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData(this.props.params.key);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.key !== prevProps.params.key) {
       this.getData(this.props.params.key);
    }
  }

  render() {
    let championShowTileDesktop;
    if (this.state.updated === false) {
      championShowTileDesktop = '';
    } else {
      championShowTileDesktop = (
        <ChampionShowTileDesktop
          key={this.state.champion.id}
          id={this.state.champion.id}
          champion={this.state.champion}
        />
      );
    }

    let championShowTileMobile;
    if (this.state.updated === false) {
      championShowTileMobile = '';
    } else {
      championShowTileMobile = (
        <ChampionShowTileMobile
          key={this.state.champion.id}
          id={this.state.champion.id}
          champion={this.state.champion}
        />
      );
    }

    return (
      <div>
        <NavigationBar />
        <Responsive maxWidth={1023}>
          {championShowTileMobile}
        </Responsive>
        <Responsive minWidth={1024}>
          {championShowTileDesktop}
        </Responsive>
      </div>
    )
  }
}

export default ChampionShow;
