import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Card, Image, Grid } from 'semantic-ui-react';

class HomeContainer extends Component {
  render() {

    const pathToIcon = require.context('../../../../public/logo', true);

    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' active >
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

        <Message warning icon='wrench' header='This Page (Home) is Still Under Development' content='We are sorry for the inconvenience' />

      </div>
    )
  }
}

export default HomeContainer;
