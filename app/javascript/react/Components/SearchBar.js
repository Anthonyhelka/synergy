import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Image, Segment, Search, Button, Icon, Dropdown } from 'semantic-ui-react';

import '../../../assets/stylesheets/SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      background: '',
      query: '',
      champions: [],
      filteredChampions: [],
      region: 'NA'
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.filterChampions = this.filterChampions.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
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

  handleSearch(event, inputType){
    this.setState({ query: event.target.value })
    if(event.keyCode == 13 || inputType === 'search-button'){
      this.handleGoClick(event);
    } else {
      this.filterChampions(event.target.value);
    }
  }

  filterChampions(query) {
    let champions = this.state.champions;
    let filteredChampions = champions.filter(champion => {
      return champion.name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredChampions: filteredChampions })
  };

  handleResultSelect(event, key){
    browserHistory.push(`/champions/${key}`);
  }

  handleRegionChange(event, region){
    this.setState({ region: region })
  }

  handleGoClick(event){
    let region = (this.state.region).toLowerCase();
    browserHistory.push(`/summoner/${region}-${this.state.query}`);
    window.location.reload();
  }

  render() {
    let results = this.state.filteredChampions.map(champion => ({
      title: champion.name,
      image: `./${champion.key}`
    }));

    const resultRenderer = ({ title, image, id }) => {
      const pathToIcon = require.context('../../../../public/icons', true);
      return [
        <Segment fluid basic='very' textAlign='left' onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-bar-result-image' key={id} src={`${pathToIcon(image, true)}`} />
          <span id='search-bar-result-title'>&nbsp;&nbsp;{title}</span>
        </Segment>
      ];
    };

    return (
      <div className='search-bar'>
        <Segment id='search-bar-container' textAlign='center' basic>
          <Segment id='search-bar-region-button-container' compact basic textAlign='center'>
            <Dropdown id='search-bar-region-button' as={Button} compact primary text={this.state.region}>
              <Dropdown.Menu>
                <Dropdown.Item text='NA' onClick={event => this.handleRegionChange(event, 'NA')} />
                <Dropdown.Item text='EUNE' onClick={event => this.handleRegionChange(event, 'EUNE')} />
                <Dropdown.Item text='EUW' onClick={event => this.handleRegionChange(event, 'EUW')} />
                <Dropdown.Item text='LAN' onClick={event => this.handleRegionChange(event, 'LAN')} />
                <Dropdown.Item text='LAS' onClick={event => this.handleRegionChange(event, 'LAS')} />
                <Dropdown.Item text='KR' onClick={event => this.handleRegionChange(event, 'KR')} />
                <Dropdown.Item text='OCE' onClick={event => this.handleRegionChange(event, 'OCE')} />
                <Dropdown.Item text='RU' onClick={event => this.handleRegionChange(event, 'RU')} />
                <Dropdown.Item text='BR' onClick={event => this.handleRegionChange(event, 'BR')} />
                <Dropdown.Item text='TR' onClick={event => this.handleRegionChange(event, 'TR')} />
              </Dropdown.Menu>
            </Dropdown>
          </Segment>
          <Segment id='search-bar-search-form-container' compact basic textAlign='center'>
            <Search id='search-bar-search-form' placeholder='Champion or Summoner' value={this.state.query} results={results} resultRenderer={resultRenderer} onSearchChange={event => this.handleSearch(event)} onKeyDown={event => this.handleSearch(event)} icon={false} showNoResults={false}/>
          </Segment>
          <Segment id='search-bar-go-button-container' compact basic textAlign='center'>
            <Button id='search-bar-go-button' icon='search' primary onClick={event => this.handleSearch(event, 'search-button')} />
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default SearchBar;
