import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Card, Image, Grid } from 'semantic-ui-react';

class ChampionsShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      champion: {}
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
      this.setState({ champion: body.champion });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const pathToIcon = require.context('../../../../public/logo', true);

    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' >
            <img src={require('../../../../public/favicon.ico')} />
          </Menu.Item>
          <Dropdown item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
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

        <h1>{name}</h1>
      </div>
    )
  }
}

export default ChampionsShow;
