import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Popup, Grid, Header, Table, Responsive, Image } from 'semantic-ui-react';

class ChampionsOverviewTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      hovered: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(event, key){
    browserHistory.push(`/champions/${key}`);
  }

  handleMouseEnter(event){
    this.setState({ hovered: true });
  }

  handleMouseLeave(event){
    this.setState({ hovered: false });
  }

  render(){
    const pathToIcon = require.context('../../../assets/images/icons', true);
    const pathToTraitIcon = require.context('../../../assets/images/traits', true);

    let traits = this.props.champion.traits.map(trait => {
      return (
        <img id='ChampionOverview-table-champion-row-trait-image' key={trait.id} src={`${pathToTraitIcon(`./${trait.key}`, true)}`} />
      )
    });

    return (
      <tr id='ChampionOverview-table-champion-row' onClick={event => this.handleClick(event, this.props.champion.key)} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.name === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-name' className='ChampionOverview-table-champion-row-item'><img id='ChampionOverview-table-champion-row-name-image' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />&nbsp;<span id='ChampionOverview-table-champion-row-name-title'>{this.props.champion.name}</span></td>
        ) : (
          <td id='ChampionOverview-table-champion-row-name' className='ChampionOverview-table-champion-row-item-active'><img id='ChampionOverview-table-champion-row-name-image' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />&nbsp;<span id='ChampionOverview-table-champion-row-name-title'>{this.props.champion.name}</span></td>
        )}
        {this.props.traits === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-traits' className='ChampionOverview-table-champion-row-item'><div id='ChampionOverview-table-champion-row-trait-images-container'>{traits}</div></td>
        ) : (
          <td id='ChampionOverview-table-champion-row-traits' className='ChampionOverview-table-champion-row-item-active'><div id='ChampionOverview-table-champion-row-trait-images-container'>{traits}</div></td>
        )}
        {this.props.cost === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-cost' className='ChampionOverview-table-champion-row-item'>{this.props.champion.cost}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-cost' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.cost}</td>
        )}
        {this.props.health === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-health' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.defense.health}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-health' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.defense.health}</td>
        )}
        {this.props.armor === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-armor' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.defense.armor}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-armor' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.defense.armor}</td>
        )}
        {this.props.magicResist === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-magic-resist' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.defense.magic_resist}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-magic-resist' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.defense.magic_resist}</td>
        )}
        {this.props.dps === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-dps' className='ChampionOverview-table-champion-row-item'>{Math.ceil(this.props.champion.stats.offense.damage * this.props.champion.stats.offense.attack_speed) * 1}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-dps' className='ChampionOverview-table-champion-row-item-active'>{Math.ceil(this.props.champion.stats.offense.damage * this.props.champion.stats.offense.attack_speed) * 1}</td>
        )}
        {this.props.attackDamage === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-attack-damage' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.offense.damage}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-attack-damage' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.offense.damage}</td>
        )}
        {this.props.attackSpeed === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-attack-speed' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.offense.attack_speed}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-attack-speed' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.offense.attack_speed}</td>
        )}
        {this.props.range === '' || this.state.hovered === true ? (
          <td id='ChampionOverview-table-champion-row-range' className='ChampionOverview-table-champion-row-item'>{this.props.champion.stats.offense.range}</td>
        ) : (
          <td id='ChampionOverview-table-champion-row-range' className='ChampionOverview-table-champion-row-item-active'>{this.props.champion.stats.offense.range}</td>
        )}
      </tr>
    );
  }
}

export default ChampionsOverviewTile;
