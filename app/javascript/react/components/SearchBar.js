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
        <Responsive key={1} as={Segment} fluid basic='very' textAlign='left' maxWidth={500}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-mobile' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>,
        <Responsive key={2} as={Segment} fluid basic='very' textAlign='left' minWidth={501} maxWidth={1249}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-tablet-computer' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>,
        <Responsive key={3} as={Segment} fluid basic='very' textAlign='left' minWidth={1250}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-large-computer' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>
      ];
    };

    return (
      <div>
        <Responsive maxWidth={500}>
          <Segment id='search-segment' textAlign='center' basic>
            <Segment id='search-bar-container' compact basic textAlign='center'>
              <Search id='search-bar' placeholder='Search for champion/summoner' value={this.state.query} results={results} resultRenderer={resultRenderer} onSearchChange={this.handleSearch} onKeyDown={this.handleSearch} icon={false} showNoResults={false} />
            </Segment>

            <br />

            <Segment id='search-bar-button-group-mobile' basic textAlign='center'>
              <Button.Group>
                <Dropdown as={Button} primary text={this.state.region}>
                  <Dropdown.Menu textAlign='center' basic>
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
                <Button icon='search' primary onClick={event => this.handleSearch(event, 'search-button')} />
              </Button.Group>
            </Segment>
          </Segment>
        </Responsive>

        <Responsive minWidth={501}>
          <Segment id='search-segment' textAlign='center' basic>
            <Segment id='region-button-container' compact basic textAlign='center'>
              <Dropdown id='region-button' as={Button} compact primary text={this.state.region}>
                <Dropdown.Menu textAlign='center' basic>
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
            <Segment id='search-bar-container' compact basic textAlign='center'>
              <Search id='search-bar' placeholder='Search for champion/summoner' value={this.state.query} results={results} resultRenderer={resultRenderer} onSearchChange={this.handleSearch} onKeyDown={this.handleSearch} icon={false} showNoResults={false} />
            </Segment>
            <Segment id='search-button-container' compact basic textAlign='center'>
              <Button id='search-button' icon='search' primary onClick={event => this.handleSearch(event, 'search-button')} />
            </Segment>
          </Segment>
        </Responsive>
      </div>
    )
  }
}

export default SearchBar;
