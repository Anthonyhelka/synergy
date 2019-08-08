import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image, Segment } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';

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
    let summonerName = this.props.params.name
    fetch(`/api/v1/summoners/${summonerName}`)
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

    const pathToRankedEmblem = require.context('../../../../public/emblems', true);

    let summonerDisplay;
    if (this.state.updated === true) {
      if (this.state.rank !== null) {
        let rankTier = `./${this.state.rank.tier}`;
        rankTier = rankTier.toLowerCase();
        summonerDisplay = (
          <span>
            <Image src={`http://ddragon.leagueoflegends.com/cdn/9.15.1/img/profileicon/${this.state.summoner.profileIconId}.png`} centered size='tiny' />
            <Image src={`${pathToRankedEmblem(rankTier, true)}`} alt={`${rankTier}`} centered size='tiny' />
            <Header.Subheader>{this.state.rank.tier} {this.state.rank.rank} {this.state.rank.leaguePoints}LP</Header.Subheader>
            <Header.Subheader>{this.state.rank.wins} Wins</Header.Subheader>
            <Header.Subheader>{this.state.rank.wins + this.state.rank.losses} Games Played</Header.Subheader>
          </span>
        );
      } else if (this.state.summoner.status === undefined) {
        summonerDisplay = (
          <span>
            <Image src={`http://ddragon.leagueoflegends.com/cdn/9.15.1/img/profileicon/${this.state.summoner.profileIconId}.png`} centered size='tiny' />
            <Header.Subheader>This summoner hasn't finished their placement matches yet!</Header.Subheader>
          </span>
        );
      } else {
        summonerDisplay = (
          <Header.Subheader>This summoner doesn't exist!</Header.Subheader>
        );
      }
    }

    return (
      <div>
        <NavigationBar />

        <Segment textAlign='center'>
          <Header>{this.state.summoner.name}</Header>
          {summonerDisplay}
        </Segment>
      </div>
    )
  }
}

export default SummonerShow;
