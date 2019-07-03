import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown } from 'semantic-ui-react';

class NewsContainer extends Component {
  render() {
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
        <Menu.Item name='news' as={ Link } to='/news' active >
          <p>News</p>
        </Menu.Item>
      </Menu>
        <p>Hello from News :)</p>
      </div>
    )
  }
}

export default NewsContainer;
