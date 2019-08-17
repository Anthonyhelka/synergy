import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import ChampionShowTile from './ChampionShowTile';

class ChampionShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      champion: {},
      updated: false
    }
  }

  componentDidMount() {
  let championName = this.props.params.name
  fetch(`/api/v1/champions/${championName}`)
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
    let championShowTile;
    if (this.state.updated === false) {
      championShowTile = '';
    } else {
      championShowTile = (
        <ChampionShowTile
          key={this.state.champion.id}
          id={this.state.champion.id}
          champion={this.state.champion}
        />
      );
    }
    
    return (
      <div>
        <NavigationBar />

        {championShowTile}
      </div>
    )
  }
}

export default ChampionShow;
