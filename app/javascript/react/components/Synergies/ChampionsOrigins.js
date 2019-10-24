import React, { Component } from 'react';

import NavigationBar from '../Components/NavigationBar';
import SynergyTile from './SynergyTile';

class ChampionsOrigins extends Component {
  constructor(props) {
    super(props);
    this.state={
      synergies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/origins')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
        })
      .then(response => response.json())
      .then(body => {
        this.setState({ synergies: body.origins })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let synergies = this.state.synergies.map(synergy => {
      return (
        <SynergyTile
          key={synergy.id}
          id={synergy.id}
          synergy={synergy}
        />
      )
    });

    return (
      <div>
        <NavigationBar page='origins' />

        <div>
          {synergies}
        </div>
      </div>
    )
  }
}

export default ChampionsOrigins;
