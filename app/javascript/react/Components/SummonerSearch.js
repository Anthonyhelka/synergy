import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Segment, Button, Icon, Dropdown, Grid, Form, Popup, List, Dimmer } from 'semantic-ui-react';

class SummonerSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      popupStatus: false,
      region: 'NA'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePopupOpen = this.handlePopupOpen.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
    this.handleClickOutsideSearchbar = this.handleClickOutsideSearchbar.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch(event, searchMethod) {
    this.setState({ query: event.target.value })
    if(event.keyCode == 13 || searchMethod === 'search-button'){
      this.handleGoClick(event);
    } else {
      this.filterChampions(event.target.value);
    }
  }

  handlePopupOpen(event) {
    this.setState({ popupStatus: true })
  }

  handleRegionChange(event, region) {
    this.setState({ region: region, popupStatus: false })
  }

  handlePopupClose(event) {
    this.setState({ popupStatus: false })
  }

  handleClickOutsideSearchbar(event) {
    if (!event.target.className.includes('SummonerSearch')) { this.setState({ popupStatus: false }); }
  }

  handleGoClick(event){
    let region = (this.state.region).toLowerCase();
    let query = this.state.query.trim();
    if (query !== '') {
      browserHistory.push(`/summoner/${region}-${this.state.query}`);
      window.location.reload();
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideSearchbar);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleClickOutsideSearchbar);
  }

  render() {
    let grid;
    if (this.state.popupStatus === true) {
      grid = (
        <Grid.Row id='SummonerSearch-region-row' className='SummonerSearch'>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'NA')}>NA</Button>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'EUW')}>EUW</Button>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'EUNE')}>EUNE</Button>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'LAN')}>LAN</Button>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'LAS')}>LAS</Button>          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'LAS')}>LAS</Button>
          <Button id='SummonerSearch-grid-region-row-button' className='SummonerSearch' onClick={event => this.handleRegionChange(event, 'BR')}>BR</Button>
          <Button id='SummonerSearch-grid-region-row-button-close' className='SummonerSearch' onClick={this.handlePopupClose}><Icon name='close'/></Button>
        </Grid.Row>
      );
    } else {
      grid = (
        <Grid.Row id='SummonerSearch-grid-row-one' className='SummonerSearch'>
          <Grid.Column id='SummonerSearch-grid-row-one-column-one' className='SummonerSearch'>
            <Button id='SummonerSearch-grid-row-one-column-one-button' className='SummonerSearch' onClick={this.handlePopupOpen}>{this.state.region}</Button>
          </Grid.Column>
          <Grid.Column id='SummonerSearch-grid-row-one-column-two' className='SummonerSearch'>
            <Form id='SummonerSearch-grid-row-one-column-two-form' className='SummonerSearch'>
              <Form.Field id='SummonerSearch-grid-row-one-column-two-form-field' className='SummonerSearch' value={this.state.query}>
                <input id='SummonerSearch-grid-row-one-column-two-form-input' className='SummonerSearch' placeholder='Summoner Name...' onChange={this.handleChange} onKeyDown={this.handleSearch} />
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column id='SummonerSearch-grid-row-one-column-three' className='SummonerSearch'>
            <Button id='SummonerSearch-grid-row-one-column-three-button' className='SummonerSearch' icon='search' onClick={event => this.handleSearch(event, 'search-button')} />
          </Grid.Column>
        </Grid.Row>
      );
    }
    return (
      <Grid id='SummonerSearch-grid-container' className='SummonerSearch'>
        {grid}
      </Grid>
    )
  }
}

export default SummonerSearch;
