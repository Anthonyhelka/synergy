import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon } from 'semantic-ui-react';

class ChampionShowTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      update: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, name) {
    browserHistory.push(`/champions/${name}`);
    window.location.reload();
  }

  render() {
    const pathToIcon = require.context('../../../../../public/icons', true);
    const pathToAbility = require.context('../../../../../public/abilities', true);
    const pathToRender = require.context('../../../../../public/renders', true);
    const pathToSynergyIcon = require.context('../../../../../public/synergies', true);
    const pathToStylingImages = require.context('../../../../../public/styling-images', true);

    let synergiesIconList = this.props.champion.teams.map(synergy => {
      return (
        <div id='champion-page-champion-header-synergy'>
          <Image src={`${pathToSynergyIcon(synergy.icon, true)}`}  />
          <span>&nbsp;{synergy.name}</span>
        </div>
      )
    });

    return (
      <div>
      <Segment id='champion-page-container'>

        <Segment id='champion-page-search-container'>
        </Segment>



        <Segment id='champion-page-champion-container'>
          <Segment className={`champion-page-champion-header ${this.props.champion.tier_color}-tier`}>
          <Label className={`champion-page-champion-header-label ${this.props.champion.tier_color}-tier`} attached='top left'><Icon fitted name='dollar sign' />&nbsp;{this.props.champion.tier}</Label>
            <div id='champion-page-champion-header-title'>
              <span>{this.props.champion.name}</span>
              <br />
              <i>The Rogue Assassin</i>
            </div>
            <Image id='champion-page-champion-header-image' src={`https://cdn.lolchess.gg/images/lol/champion-splash-modified/${this.props.champion.name}.jpg`} />
            <div id='champion-page-champion-header-synergies-container'>
              {synergiesIconList}
            </div>
          </Segment>
        </Segment>



      </Segment>
      </div>
    );
  }
}

export default ChampionShowTile;
