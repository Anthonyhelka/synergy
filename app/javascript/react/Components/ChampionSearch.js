import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Image, Segment, Search, Button, Icon, Dropdown, Form, List, Dimmer, Loader } from 'semantic-ui-react';

import ChampionSearchTile from './ChampionSearchTile';

class ChampionSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      champions: [],
      filteredChampions: [],
      sort: 'up',
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterChampions = this.filterChampions.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
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
        this.setState({ champions: body.champions, loading: false })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
    this.filterChampions(event.target.value);
  }

  filterChampions(query) {
    let champions = this.state.champions;
    let filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredChampions: filteredChampions })
  }

  handleSortChange(event) {
    (this.state.sort === 'up') ? this.setState({ sort: 'down' }) : this.setState({ sort: 'up' });
  }

  render() {
    let champions;
    let championsSortOrder;
    if (this.state.query === '') {
      championsSortOrder = (this.state.sort === 'up') ? this.state.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.state.champions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      champions = championsSortOrder.map(champion => {
        return (
          <ChampionSearchTile
            key={champion.id}
            id={champion.id}
            champion={champion}
          />
        )
      });
    } else {
        championsSortOrder = (this.state.sort === 'up') ? this.state.filteredChampions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.state.filteredChampions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
        champions = championsSortOrder.map(champion => {
        return (
          <ChampionSearchTile
            key={champion.id}
            id={champion.id}
            champion={champion}
          />
        )
      });
    }

    return (
      <div id='ChampionSearch-container'>
        <div id='ChampionSearch-form-container'>
          <Form id='ChampionSearch-form'>
            <Form.Field id='ChampionSearch-form-field' value={this.state.query} onChange={this.handleChange}>
              <input id='ChampionSearch-form-input' placeholder='Champion Name...' />
              <Icon id='ChampionSearch-form-sort-icon' name={`sort amount ${this.state.sort}`} onClick={this.handleSortChange} />
            </Form.Field>
          </Form>
        </div>
        <div id='ChampionSearch-results-container'>
          <div id='ChampionSearch-champions-container'>
            <Loader id='ChampionSearch-champions-loader' active={this.state.loading}/>
            {champions}
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionSearch;
