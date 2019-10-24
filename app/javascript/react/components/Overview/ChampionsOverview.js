import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import ChampionsOverviewTile from './ChampionsOverviewTile';

class ChampionsOverview extends Component {
  constructor(props) {
    super(props);
    this.state={
      champions: [],
      sort: ''
    }
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, sortKey){
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
        this.setState({ champions: body.champions })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let nameOrder = '';
    let tierOrder = '';

    if (this.state.sort === 'z-a') {
      nameOrder = 'descending'
      this.state.champions.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return (nameB < nameA) ? -1 : (nameB > nameA) ? 1 : 0;
      });
    } else if (this.state.sort === '1-5') {
      tierOrder = 'ascending';
      this.state.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
    } else if (this.state.sort === '5-1') {
      tierOrder = 'descending';
      this.state.champions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
    } else {
      nameOrder = 'ascending';
      this.state.champions.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });
    }

    if (nameOrder === '') {
      nameOrder = 'ascending';
    }

    if (tierOrder === '') {
      tierOrder = 'ascending';
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
        <NavigationBar page='overview' />

        <Table celled selectable unstackable striped fixed sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={nameOrder} onClick={event => this.handleSort(event, 'nameSort')} color='red' >Name</Table.HeaderCell>
              <Table.HeaderCell>Synergies</Table.HeaderCell>
              <Table.HeaderCell width='3' sorted={tierOrder} onClick={event => this.handleSort(event, 'tierSort')} ><Icon name='dollar sign' /></Table.HeaderCell>
              <Table.HeaderCell>Ability</Table.HeaderCell>
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
