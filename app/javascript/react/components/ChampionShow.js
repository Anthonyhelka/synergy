import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Card, Image, Grid, Responsive } from 'semantic-ui-react';

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
        <Responsive as={Menu} inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={ Link } to='/' />
              <Dropdown.Item text='Champions' as={ Link } to='/champions' />
              <Dropdown.Item text='Origins' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Classes' as={ Link } to='/champions/classes' />
              <Dropdown.Item text='Items' as={ Link } to='/items' />
              <Dropdown.Item text='News' as={ Link } to='/news' />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/'>
            <Image src={require('../../../../public/favicon.ico')} size='mini' />
          </Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items'>
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news'>
            <p>News</p>
          </Menu.Item>
        </Responsive>

        {championShowTile}

      </div>
    )
  }
}

export default ChampionShow;
