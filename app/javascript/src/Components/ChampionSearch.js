import React, { Component } from 'react';

import { connect } from 'react-redux';

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
      season: 1,
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterChampions = this.filterChampions.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
    this.filterChampions(event.target.value, this.state.season);
  }

  filterChampions(query, season) {
    let champions = this.state.champions;
    let filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase()) && champion.season.id === season;
    });
    this.setState({ filteredChampions: filteredChampions })
  }

  handleSeasonChange(event, seasonButton) {
    this.setState({ season: seasonButton })
    this.filterChampions(this.state.query, seasonButton);
  }

  handleSortChange(event) {
    (this.state.sort === 'up') ? this.setState({ sort: 'down' }) : this.setState({ sort: 'up' });
  }

  render() {
    let championsSortOrder = (this.state.sort === 'up') ? this.state.filteredChampions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.state.filteredChampions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
    let champions = championsSortOrder.map(champion => {
      return (
        <ChampionSearchTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

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
        {this.state.season === 1 ? (
          <div id='ChampionSearch-season-button-container'>
            <Button className='ChampionSearch-season-button-active' onClick={event => this.handleSeasonChange(event, 1)}>Set 1</Button>
            <Button className='ChampionSearch-season-button-inactive' onClick={event => this.handleSeasonChange(event, 2)}>Set 2</Button>
          </div>
        ) : (
          <div id='ChampionSearch-season-button-container'>
            <Button className='ChampionSearch-season-button-inactive' onClick={event => this.handleSeasonChange(event, 1)}>Set 1</Button>
            <Button className='ChampionSearch-season-button-active' onClick={event => this.handleSeasonChange(event, 2)}>Set 2</Button>
          </div>
        )}
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

const mapStateToProps = (state) => {
  return {
    championList: state.champions.championList
  }
}

export default connect(
  mapStateToProps,
  null
)(ChampionSearch)
