import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image, Segment } from 'semantic-ui-react';

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
            <Image src={`${pathToRankedEmblem(rankTier, true)}`} alt={`${rankTier}`} centered size='tiny' />
            <Header.Subheader>{this.state.rank.tier} {this.state.rank.rank} {this.state.rank.leaguePoints}LP</Header.Subheader>
            <Header.Subheader>{this.state.rank.wins} Wins</Header.Subheader>
            <Header.Subheader>{this.state.rank.wins + this.state.rank.losses} Games Played</Header.Subheader>
          </span>
        );
      } else if (this.state.summoner.status === undefined) {
        summonerDisplay = (
          <Header.Subheader>This summoner hasn't finished their placement matches yet!</Header.Subheader>
        );
      } else {
        summonerDisplay = (
          <Header.Subheader>This summoner doesn't exist!</Header.Subheader>
        );
      }
    }

    return (
      <div>
        <Responsive as={Menu} inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={ Link } to='/' />
              <Dropdown.Item text='Champions' as={ Link } to='/champions' />
              <Dropdown.Item text='Origins' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Classes' as={ Link } to='/champions/classes' />
              <Dropdown.Item text='Items' as={ Link } to='/items' />
              <Dropdown.Item text='News' as={ Link } to='/news' active />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/'>
            <Image src={require('../../../../public/favicon.ico')} size='mini' />
          </Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items'>
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news' active>
            <p>News</p>
          </Menu.Item>
        </Responsive>

        <Segment textAlign='center'>
          <Header>{this.state.summoner.name}</Header>
          <Image src={`http://ddragon.leagueoflegends.com/cdn/9.15.1/img/profileicon/${this.state.summoner.profileIconId}.png`} centered size='tiny' />
          {summonerDisplay}
        </Segment>

      </div>
    )
  }
}

export default SummonerShow;
