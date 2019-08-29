import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment, Search, Button, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      background: '',
      query: '',
      filteredData: [],
      region: 'NA'
    }
    this.getData = this.getData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleSearchSummoner = this.handleSearchSummoner.bind(this);
  }

  getData() {
    fetch(`/api/v1/champions/overview`)
      .then(response => response.json())
      .then(response => {
        let query = this.state.query;
        let data = response.champions;
        let filteredData = data.filter(champion => {
          return champion.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
          filteredData: filteredData
        })
      });
  };

  handleSearch(event, inputType){
    if(event.keyCode == 13 || inputType === 'search-button'){
      this.handleSearchSummoner(event);
    } else {
      this.handleSearchChange(event);
    }
  }

  handleSearchSummoner(event){
    let region = (this.state.region).toLowerCase();
    browserHistory.push(`/summoner/${region}-${this.state.query}`);
    window.location.reload();
  }

  handleSearchChange(event){
    this.setState({ query: event.target.value })
    this.getData();
  }

  handleResultSelect(event, name){
    browserHistory.push(`/champions/${name}`);
  }

  handleRegionChange(event, region){
    this.setState({ region: region })
  }

  render() {
    let results = this.state.filteredData.map(champion => ({
      title: champion.name,
      image: champion.icon
    }));

    const resultRenderer = ({ title, image, id }) => {
      const pathToIcon = require.context('../../../../public/icons', true);
      return [
        <Segment fluid basic='very' textAlign='left' onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-bar-result-image' key={id} src={`${pathToIcon(image , true)}`} />
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
            <Search id='search-bar-search-form' placeholder='Search for champion/summoner' icon={false} showNoResults={false} value={this.state.query} results={results} resultRenderer={resultRenderer} onSearchChange={this.handleSearch} onKeyDown={this.handleSearch}/>
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
