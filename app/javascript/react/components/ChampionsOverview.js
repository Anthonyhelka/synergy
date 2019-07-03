import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Table, Icon } from 'semantic-ui-react';

import ChampionsOverviewTile from './ChampionsOverviewTile';

class ChampionsOverview extends Component {
  constructor(props) {
    super(props);
    this.state={
      champions: [],
      sort: '',
    }
    this.onSortName = this.onSort.bind(this)
  }

  onSort(event, sortKey){
    if (sortKey === 'nameSort' && this.state.sort === 'z-a') {
      this.setState({ sort: 'a-z' })
    } else if (sortKey === 'nameSort') {
      this.setState({ sort: 'z-a' })
    } else if (sortKey === 'tierSort' && this.state.sort === '1-5') {
      this.setState({ sort: '5-1' })
    } else if (sortKey === 'tierSort') {
      this.setState({ sort: '1-5' })
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/overview')
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
        this.setState({
          champions: body.champions
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    if (this.state.sort === 'z-a') {
      this.state.champions.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return (nameB < nameA) ? -1 : (nameB > nameA) ? 1 : 0;
      });
    } else if (this.state.sort === '1-5') {
      this.state.champions.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    } else if (this.state.sort === '5-1') {
      this.state.champions.sort((a, b) => parseFloat(b.tier) - parseFloat(a.tier));
    } else {
      this.state.champions.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });
    }

    let champions = this.state.champions.map(champion => {
      return (
        <ChampionsOverviewTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' >
            <img src={require('../../../../public/favicon.ico')} />
          </Menu.Item>
          <Dropdown item text='Champions' >
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' active />
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

        <Table celled selectable unstackable striped fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={event => this.onSort(event, 'nameSort')} >
                Name
                <Icon name='arrows alternate vertical' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Synergies
              </Table.HeaderCell>
              <Table.HeaderCell width='3' singleLine onClick={event => this.onSort(event, 'tierSort')} >
                  Tier
                  <Icon name='arrows alternate vertical' />
              </Table.HeaderCell>
              <Table.HeaderCell>
                Ability
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {champions}
          </Table.Body>
        </Table>

      </div>
    )
  }
}

export default ChampionsOverview;
