import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' >
            <img src={require('../../../../public/favicon.ico')} />
          </Menu.Item>
          <Menu.Item name='champions' as={ Link } to='/champions' >
            <p>Champions</p>
          </Menu.Item>
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
