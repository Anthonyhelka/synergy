import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Segment, Button, Icon, Dropdown, Grid, Form } from 'semantic-ui-react';

class SummonerSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      region: 'NA'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch(event, searchMethod){
    this.setState({ query: event.target.value })
    if(event.keyCode == 13 || searchMethod === 'search-button'){
      this.handleGoClick(event);
    } else {
      this.filterChampions(event.target.value);
    }
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

    return (
      <Grid id='SummonerSearch-grid-container'>
        <Grid.Row id='SummonerSearch-grid-row-one'>
          <Grid.Column id='SummonerSearch-grid-row-one-column-one'>
            <Dropdown id='SummonerSearch-grid-row-one-column-one-button' as={Button} compact primary text={this.state.region}>
              <Dropdown.Menu id='SummonerSearch-grid-row-one-column-one-button-menu'>
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='NA' onClick={event => this.handleRegionChange(event, 'NA')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='EUNE' onClick={event => this.handleRegionChange(event, 'EUNE')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='EUW' onClick={event => this.handleRegionChange(event, 'EUW')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='LAN' onClick={event => this.handleRegionChange(event, 'LAN')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='LAS' onClick={event => this.handleRegionChange(event, 'LAS')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='KR' onClick={event => this.handleRegionChange(event, 'KR')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='OCE' onClick={event => this.handleRegionChange(event, 'OCE')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='RU' onClick={event => this.handleRegionChange(event, 'RU')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='BR' onClick={event => this.handleRegionChange(event, 'BR')} />
                <Dropdown.Item id='SummonerSearch-grid-row-one-column-one-button-menu-item' text='TR' onClick={event => this.handleRegionChange(event, 'TR')} />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column id='SummonerSearch-grid-row-one-column-two'>
            <Form id='SummonerSearch-grid-row-one-column-two-form'>
              <Form.Field id='SummonerSearch-grid-row-one-column-two-form-field' value={this.state.query}>
                <input id='SummonerSearch-grid-row-one-column-two-form-input' placeholder='Summoner Name...' onChange={this.handleChange} onKeyDown={this.handleSearch} />
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column id='SummonerSearch-grid-row-one-column-three'>
            <Button id='SummonerSearch-grid-row-one-column-three-button' icon='search' primary onClick={event => this.handleSearch(event, 'search-button')} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default SummonerSearch;
