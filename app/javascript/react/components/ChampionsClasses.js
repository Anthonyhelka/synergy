import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Responsive, Image } from 'semantic-ui-react';

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
        <Responsive as={Menu} inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={ Link } to='/' />
              <Dropdown.Item text='Champions' as={ Link } to='/champions' />
              <Dropdown.Item text='Origins' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Classes' as={ Link } to='/champions/classes' active />
              <Dropdown.Item text='Items' as={ Link } to='/items' />
              <Dropdown.Item text='News' as={ Link } to='/news' />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/'>
            <Image src={require('../../../../public/favicon.ico')} size='mini' />
          </Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions' active>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' active />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items'>
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news'>
            <p>News</p>
          </Menu.Item>
        </Responsive>

        <div>
          {synergies}
        </div>

      </div>
    )
  }
}

export default ChampionsClasses;
