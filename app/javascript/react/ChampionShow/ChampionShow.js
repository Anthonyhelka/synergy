import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import ChampionShowTileDesktop from './ChampionShowTileDesktop';
import ChampionShowTileMobile from './ChampionShowTileMobile';

class ChampionShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      champion: {},
      updated: false
    }
  }

  componentDidMount() {
  let championKey = this.props.params.key
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
      this.setState({ champion: body.champion[0], updated: true });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
