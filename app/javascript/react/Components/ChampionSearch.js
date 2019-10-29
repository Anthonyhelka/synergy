import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Image, Segment, Search, Button, Icon, Dropdown, Form, List } from 'semantic-ui-react';

import ChampionSearchTile from './ChampionSearchTile';

class ChampionSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      champions: [],
      filteredChampions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterChampions = this.filterChampions.bind(this);
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

  handleChange(event){
    this.setState({ query: event.target.value });
    this.filterChampions(event.target.value);
  }

  filterChampions(query){
    let champions = this.state.champions;
    let filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredChampions: filteredChampions })
  }

  render() {
    let champions;
    if (this.state.query === '') {
      champions = this.state.champions.map(champion => {
        return (
          <ChampionSearchTile
            key={champion.id}
            id={champion.id}
            champion={champion}
          />
        )
      });
    } else {
      champions = this.state.filteredChampions.map(champion => {
      return (
        <ChampionSearchTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
  }

    return [
        <Responsive id='champion-search-container' as='div' key='mobile/tablet' maxWidth={1023}>
          <div id='champion-search-form-mobile'>
            <Form>
              <Form.Field value={this.state.query} onChange={this.handleChange}>
                <input placeholder='Champion Name...' />
              </Form.Field>
            </Form>
          </div>
          <List id='champions-search-list-mobile' horizontal>
            {champions}
          </List>
        </Responsive>,
        <Responsive id='champion-search-container' as='div' key='mobile/tablet' minWidth={1024}>
          <div id='champion-search-form'>
            <Form>
              <Form.Field value={this.state.query} onChange={this.handleChange}>
                <input placeholder='Champion Name...' />
              </Form.Field>
            </Form>
          </div>
          <List id='champions-search-list' horizontal>
            {champions}
          </List>
        </Responsive>
    ]
  }
}

export default ChampionSearch;