import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown } from 'semantic-ui-react';

import SynergyTile from './SynergyTile';

class ChampionsOrigins extends Component {
  constructor(props) {
    super(props);
    this.state={
      origins: []
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
        this.setState({ origins: body.origins })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let synergies = this.state.origins.map(origin => {
      return (
        <SynergyTile
          key={origin.id}
          id={origin.id}
          synergy={origin}
        />
      )
    });

    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' >
            <img src={require('../../../../public/favicon.ico')} />
          </Menu.Item>
          <Dropdown item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' active />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items' >
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news' >
            <p>News</p>
          </Menu.Item>
        </Menu>

        <div>
          {synergies}
        </div>

      </div>
    )
  }
}

export default ChampionsOrigins;
