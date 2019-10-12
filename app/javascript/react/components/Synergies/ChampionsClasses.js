import React, { Component } from 'react';

import NavigationBar from '../NavigationBar';
import SynergyTile from './SynergyTile';

class ChampionsClasses extends Component {
  constructor(props) {
    super(props);
    this.state={
      synergies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/classes')
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
        this.setState({ synergies: body.classes })
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
        <NavigationBar page='classes' />

        <div>
          {synergies}
        </div>
      </div>
    )
  }
}

export default ChampionsClasses;
