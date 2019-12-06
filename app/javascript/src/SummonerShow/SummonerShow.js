import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image, Segment, Divider } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import SummonerSearch from '../Components/SummonerSearch';

class SummonerShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      summoner: {},
      status: '',
      isFetched: false,
      message: {type: '', content: ''}
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    let summoner = this.props.params.name;
    fetch(`/api/v1/summoner/${summoner}`)
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
        this.setState({ summoner: body.summoner, status: body.status, isFetched: true })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpdate() {
    if (new Date() - new Date(this.state.summoner.updated_at) >= (5 * 60 * 1000)) {
      fetch(`/api/v1/summoner/${this.state.summoner.summoner_id}`, {
        method: 'PUT',
        body: JSON.stringify({ region: this.state.summoner.region }),
        headers: { 'Content-Type': 'application/json' }
      })
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
        this.setState({ summoner: body.summoner, status: body.status, message: {type: 'success', content: 'Updated!'} })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    } else {
      let millisecondsRemaining = new Date() - new Date(this.state.summoner.updated_at) - (5 * 60 * 1000);
      let secondsRemaining = (Math.abs(millisecondsRemaining) / 1000).toFixed(0)
      let message = `You just updated! You can update again in ${secondsRemaining} seconds!`;
      this.setState({ message: {type: 'error', content: message} })
    }
  }

  render() {
    const pathToRankedEmblem = require.context('../../../assets/images/emblems', true);
    let summonerDisplay;
    if (this.state.isFetched === true) {
      if (this.state.status === 'Fail') {
        summonerDisplay = (
          <div>
            <p>This summoner doesn't exist!</p>
          </div>
        );
      } else if (this.state.summoner.ranked_data.tier !== "Unranked" && this.state.status === 'Success') {
        let rankTier = `./${this.state.summoner.ranked_data.tier}`;
        rankTier = rankTier.toLowerCase();
        let winRate = ((this.state.summoner.ranked_data.wins / (this.state.summoner.ranked_data.wins + this.state.summoner.ranked_data.losses)) * 100).toFixed(2);
        summonerDisplay = (
          <div>
            <button onClick={this.handleUpdate}>Update</button>
            <br />
            <span><b>{this.state.summoner.name}</b></span>
            <Image id='summoner-show-page-icon' src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/${this.state.summoner.icon}.png`} rounded centered size='tiny' />
            <Divider />
            <Image src={`${pathToRankedEmblem(rankTier, true)}`} alt={`${rankTier}`} centered size='tiny' />
            <span id='summoner-show-page-rank'>{this.state.summoner.ranked_data.tier} {this.state.summoner.ranked_data.division} {this.state.summoner.ranked_data.league_points}LP</span>
            <br />
            <span id='summoner-show-page-rank-wins'>{this.state.summoner.ranked_data.wins}W</span>
            <span> / </span>
            <span id='summoner-show-page-rank-losses'>{this.state.summoner.ranked_data.losses}L</span>
            <span> ({winRate}%)</span>
            <Divider />
            <Header>Match History</Header>
            <Message warning header='Coming Soon!' />
          </div>
        );
      } else if (this.state.summoner.ranked_data.tier === 'Unranked' && this.state.status === 'Success') {
        let rankTier = `./${this.state.summoner.ranked_data.tier}`;
        rankTier = rankTier.toLowerCase();
        summonerDisplay = (
          <div>
            <button onClick={this.handleUpdate}>Update</button>
            <br />
            <span><b>{this.state.summoner.name}</b></span>
            <Image id='summoner-show-page-icon' src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/${this.state.summoner.icon}.png`} centered rounded size='tiny' />
            <Divider />
            <Image src={`${pathToRankedEmblem(rankTier, true)}`} alt={`${rankTier}`} centered size='tiny' />
            <span id='summoner-show-page-rank'>Unranked</span>
            <Divider />
            <Header>Match History</Header>
            <Message warning header='Coming Soon!' />
          </div>
        );
      }
    }

    return (
      <div>
        <NavigationBar />

        <br />

        <Responsive maxWidth='1023'>
          <Segment id='summoner-show-page-container-mobile-tablet' textAlign='center'>
            {this.state.message.content !== '' ? (<Message warning header={this.state.message} />) : (<span></span>)}
            {summonerDisplay}
          </Segment>
        </Responsive>

        <Responsive minWidth='1024'>
          <Segment id='summoner-show-page-container-computer' textAlign='center'>
            {this.state.message.content !== '' ? (<Message warning header={this.state.message} />) : (<span></span>)}
            {summonerDisplay}
          </Segment>
        </Responsive>
      </div>
    )
  }
}

export default SummonerShow;
