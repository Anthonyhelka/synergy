import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Popup, Grid, Header, Table, Responsive, Image } from 'semantic-ui-react';

class ChampionsOverviewTile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, key){
    browserHistory.push(`/champions/${key}`);
  }

  render(){
    const pathToIcon = require.context('../../../assets/images/icons', true);
    const pathToTraitIcon = require.context('../../../assets/images/traits', true);

    let traits = this.props.champion.traits.map(trait => {
      return (
        <img id='ChampionOverviewDesktop-table-champion-row-trait-image' key={trait.id} src={`${pathToTraitIcon(`./${trait.key}`, true)}`} />
      )
    });

    return (
      <tr id='ChampionOverviewDesktop-table-champion-row' onClick={event => this.handleClick(event, this.props.champion.key)}>
        <td id='ChampionOverviewDesktop-table-champion-row-name'><img id='ChampionOverviewDesktop-table-champion-row-name-image' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />&nbsp;<span id='ChampionOverviewDesktop-table-champion-row-name-title'>{this.props.champion.name}</span></td>
        <td id='ChampionOverviewDesktop-table-champion-row-traits'><div id='ChampionOverviewDesktop-table-champion-row-trait-images-container'>{traits}</div></td>
        <td id='ChampionOverviewDesktop-table-champion-row-cost'>{this.props.champion.cost}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-health'>{this.props.champion.stats.defense.health}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-armor'>{this.props.champion.stats.defense.armor}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-magic-resist'>{this.props.champion.stats.defense.magic_resist}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-dps'>{Math.ceil(this.props.champion.stats.offense.damage * this.props.champion.stats.offense.attack_speed) * 1}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-attack-damage'>{this.props.champion.stats.offense.damage}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-attack-speed'>{this.props.champion.stats.offense.attack_speed}</td>
        <td id='ChampionOverviewDesktop-table-champion-row-range'>{this.props.champion.stats.offense.range}</td>
      </tr>
    );
  }
}

export default ChampionsOverviewTile;
