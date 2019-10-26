import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image, Segment, Divider } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import SearchBar from '../Components/SearchBar';

class SummonerShow extends Component {
  constructor(props) {
    super(props);
    this.state={
      summoner: {},
      rank: {},
      updated: false
    }
  }

  componentDidMount() {
    let summoner = this.props.params.name
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
        this.setState({ summoner: body.summoner, rank: body.rank, updated: true })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    const pathToRankedEmblem = require.context('../../../assets/images/emblems', true);

    let summonerDisplay;
    if (this.state.updated === true) {
      if (this.state.rank !== null) {
        let rankTier = `./${this.state.rank.tier}`;
        rankTier = rankTier.toLowerCase();
        let winRate = ((this.state.rank.wins / (this.state.rank.wins + this.state.rank.losses)) * 100).toFixed(2);
        summonerDisplay = (
          <div>
            <Image id='summoner-show-page-icon' src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/profileicon/${this.state.summoner.profileIconId}.png`} rounded centered size='tiny' />
            <Divider />
            <Image src={`${pathToRankedEmblem(rankTier, true)}`} alt={`${rankTier}`} centered size='tiny' />
            <span id='summoner-show-page-rank'>{this.state.rank.tier} {this.state.rank.rank} {this.state.rank.leaguePoints}LP</span>
            <br />
            <span id='summoner-show-page-rank-wins'>{this.state.rank.wins}W</span>
            <span> / </span>
            <span id='summoner-show-page-rank-losses'>{this.state.rank.losses}L</span>
            <span> ({winRate}%)</span>
            <Divider />
            <Header>Match History</Header>
            <Message warning header='Coming Soon!' />
          </div>
        );
      } else if (this.state.summoner.status === undefined) {
        summonerDisplay = (
          <div>
            <Image id='summoner-show-page-icon' src={`http://ddragon.leagueoflegends.com/cdn/9.15.1/img/profileicon/${this.state.summoner.profileIconId}.png`} centered rounded size='tiny' />
            <Divider />
            <Image src='https://raw.communitydragon.org/9.15/game/assets/ux/mastery/mastery_icon_default.loadingscreenpolish.png' centered  size='tiny' />
            <span id='summoner-show-page-rank'>Unranked</span>
            <Divider />
            <Header>Match History</Header>
            <Message warning header='Coming Soon!' />
          </div>
        );
      } else {
        summonerDisplay = (
          <div>
            <Header.Subheader>This summoner doesn't exist!</Header.Subheader>
          </div>
        );
      }
    }

    return (
      <div>
        <NavigationBar />

        <br />

        <SearchBar />

        <br />

        <Responsive maxWidth='1023'>
          <Segment id='summoner-show-page-container-mobile-tablet' textAlign='center'>
            <Header>{this.state.summoner.name}</Header>
            {summonerDisplay}
          </Segment>
        </Responsive>

        <Responsive minWidth='1024'>
          <Segment id='summoner-show-page-container-computer' textAlign='center'>
            <Header>{this.state.summoner.name}</Header>
            {summonerDisplay}
          </Segment>
        </Responsive>
      </div>
    )
  }
}

export default SummonerShow;
