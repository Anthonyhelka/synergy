import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

import NavigationBar from '../Components/NavigationBar';
import TraitTile from './TraitTile';

class ChampionsOrigins extends Component {
  constructor(props) {
    super(props);
    this.state={
      traits: []
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
        this.setState({ traits: body.origins })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let traits = this.state.traits.map(trait => {
      return (
        <TraitTile
          key={trait.id}
          id={trait.id}
          trait={trait}
        />
      )
    });

    return (
      <div>
        <NavigationBar page='origins' />

        <div id='ChampionOriginsDesktop-page-container'>
          {traits}
        </div>
      </div>
    )
  }
}

export default ChampionsOrigins;
