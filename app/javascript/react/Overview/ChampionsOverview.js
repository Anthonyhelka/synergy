import React, { Component } from 'react';
import { Responsive, Table, Icon, Loader } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import ChampionsOverviewTile from './ChampionsOverviewTile';

class ChampionsOverview extends Component {
  constructor(props) {
    super(props);
    this.state={
      champions: [],
      updated: false,
      loading: true,
      currentSort: 'nameAscending',
      name: ' ascending',
      traits: '',
      cost: '',
      health: '',
      armor: '',
      magicResist: '',
      dps: '',
      attackDamage: '',
      attackSpeed: '',
      range: ''
    }
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, header){
    switch(header) {
      case 'name':
        (this.state.currentSort === 'nameAscending' ? this.setState({ currentSort: 'nameDescending', name: ' descending', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'nameAscending', name: ' ascending', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'traits':
        (this.state.currentSort === 'traitsAscending' ? this.setState({ currentSort: 'traitsDescending', name: '', traits: ' descending', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'traitsAscending', name: '', traits: ' ascending', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'cost':
        (this.state.currentSort === 'costAscending' ? this.setState({ currentSort: 'costDescending', name: '', traits: '', cost: ' descending', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'costAscending', name: '', traits: '', cost: ' ascending', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'health':
        (this.state.currentSort === 'healthAscending' ? this.setState({ currentSort: 'healthDescending', name: '', traits: '', cost: '', health: ' descending', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'healthAscending', name: '', traits: '', cost: '', health: ' ascending', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'armor':
        (this.state.currentSort === 'armorAscending' ? this.setState({ currentSort: 'armorDescending', name: '', traits: '', cost: '', health: '', armor: ' descending', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'armorAscending', name: '', traits: '', cost: '', health: '', armor: ' ascending', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'magicResist':
        (this.state.currentSort === 'magicResistAscending' ? this.setState({ currentSort: 'magicResistDescending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: ' descending', dps: '', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'magicResistAscending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: ' ascending', dps: '', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'dps':
        (this.state.currentSort === 'dpsAscending' ? this.setState({ currentSort: 'dpsDescending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: ' descending', attackDamage: '', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'dpsAscending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: ' ascending', attackDamage: '', attackSpeed: '', range: '' }));
        break;
      case 'attackDamage':
        (this.state.currentSort === 'attackDamageAscending' ? this.setState({ currentSort: 'attackDamageDescending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: ' descending', attackSpeed: '', range: '' }) : this.setState({ currentSort: 'attackDamageAscending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: ' ascending', attackSpeed: '', range: '' }));
        break;
      case 'attackSpeed':
        (this.state.currentSort === 'attackSpeedAscending' ? this.setState({ currentSort: 'attackSpeedDescending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: ' descending', range: '' }) : this.setState({ currentSort: 'attackSpeedAscending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: ' ascending', range: '' }));
        break;
      case 'range':
        (this.state.currentSort === 'rangeAscending' ? this.setState({ currentSort: 'rangeDescending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: ' descending' }) : this.setState({ currentSort: 'rangeAscending', name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: ' ascending' }));
        break;
      default:
        this.setState({ currentSort: 'nameAscending', name: ' ascending' });
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/overview')
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
        this.setState({ champions: body.champions, updated: true, loading: false })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    if (this.state.updated === true) {
      switch(this.state.currentSort) {
        case 'nameAscending':
          this.state.champions.sort(function(a, b) { return (a.key < b.key) ? -1 : ( a.key > b.key) ? 1 : 0; });
          break;
        case 'nameDescending':
          this.state.champions.sort(function(a, b) { return (b.key < a.key) ? -1 : (b.key > a.key) ? 1 : 0; });
          break;
        case 'traitsAscending':
          this.state.champions.sort((a, b) => parseFloat(a.traits.length) - parseFloat(b.traits.length));
          break;
        case 'traitsDescending':
          this.state.champions.sort((a, b) => parseFloat(b.traits.length) - parseFloat(a.traits.length));
          break;
        case 'costAscending':
          this.state.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
          break;
        case 'costDescending':
          this.state.champions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
          break;
        case 'healthAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.defense.health) - parseFloat(b.stats.defense.health));
          break;
        case 'healthDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.defense.health) - parseFloat(a.stats.defense.health));
          break;
        case 'armorAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.defense.armor) - parseFloat(b.stats.defense.armor));
          break;
        case 'armorDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.defense.armor) - parseFloat(a.stats.defense.armor));
          break;
        case 'magicResistAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.defense.magic_resist) - parseFloat(b.stats.defense.magic_resist));
          break;
        case 'magicResistDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.defense.magic_resist) - parseFloat(a.stats.defense.magic_resist));
          break;
        case 'dpsAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.offense.damage * a.stats.offense.attack_speed) - parseFloat(b.stats.offense.damage * b.stats.offense.attack_speed));
          break;
        case 'dpsDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.offense.damage * b.stats.offense.attack_speed) - parseFloat(a.stats.offense.damage * a.stats.offense.attack_speed));
          break;
        case 'attackDamageAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.offense.damage) - parseFloat(b.stats.offense.damage));
          break;
        case 'attackDamageDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.offense.damage) - parseFloat(a.stats.offense.damage));
          break;
        case 'attackSpeedAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.offense.attack_speed) - parseFloat(b.stats.offense.attack_speed));
          break;
        case 'attackSpeedDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.offense.attack_speed) - parseFloat(a.stats.offense.attack_speed));
          break;
        case 'rangeAscending':
          this.state.champions.sort((a, b) => parseFloat(a.stats.offense.range) - parseFloat(b.stats.offense.range));
          break;
        case 'rangeDescending':
          this.state.champions.sort((a, b) => parseFloat(b.stats.offense.range) - parseFloat(a.stats.offense.range));
          break;
        default:
          this.state.champions.sort(function(a, b) { return (a.key < b.key) ? -1 : ( a.key > b.key) ? 1 : 0; });
      }
    }

    let champions = this.state.champions.map(champion => {
      return (
        <ChampionsOverviewTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    return [
      <Responsive maxWidth={1023}>
        <div id='ChampionOverviewMobile-page-container'>
          <NavigationBar page='overview' />
          <div id='ChampionOverviewMobile-spacing-div'></div>
          <div id='ChampionOverviewMobile-table-container'>
            <table id='ChampionOverviewMobile-table'>
              <tbody>
                <tr id='ChampionOverviewMobile-table-header-row'>
                  <th id='ChampionOverviewMobile-table-header-row-name' onClick={event => this.handleSort(event, 'name')}>Name&nbsp;<Icon name={`sort${this.state.name}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-traits' onClick={event => this.handleSort(event, 'traits')}>Traits&nbsp;<Icon name={`sort${this.state.traits}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-cost' onClick={event => this.handleSort(event, 'cost')}>Cost&nbsp;<Icon name={`sort${this.state.cost}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-health' onClick={event => this.handleSort(event, 'health')}>Health&nbsp;<Icon name={`sort${this.state.health}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-armor' onClick={event => this.handleSort(event, 'armor')}>Armor&nbsp;<Icon name={`sort${this.state.armor}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-magic-resist' onClick={event => this.handleSort(event, 'magicResist')}>MR&nbsp;<Icon name={`sort${this.state.magicResist}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-dps' onClick={event => this.handleSort(event, 'dps')}>DPS&nbsp;<Icon name={`sort${this.state.dps}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-attack-damage' onClick={event => this.handleSort(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort${this.state.attackDamage}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-attack-speed' onClick={event => this.handleSort(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort${this.state.attackSpeed}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-range' onClick={event => this.handleSort(event, 'range')}>Range&nbsp;<Icon name={`sort${this.state.range}`}/></th>
                </tr>
                <Loader id='ChampionOverviewMobile-loader' active={this.state.loading}/>
                {champions}
              </tbody>
            </table>
          </div>
        </div>
      </Responsive>,

      <Responsive minWidth={1024}>
        <div id='ChampionOverviewDesktop-page-container'>
          <NavigationBar page='overview' />
          <table id='ChampionOverviewDesktop-table'>
            <tbody>
              <tr id='ChampionOverviewDesktop-table-header-row'>
                <th id='ChampionOverviewDesktop-table-header-row-name' onClick={event => this.handleSort(event, 'name')}>Name&nbsp;<Icon name={`sort${this.state.name}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-traits' onClick={event => this.handleSort(event, 'traits')}>Traits&nbsp;<Icon name={`sort${this.state.traits}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-cost' onClick={event => this.handleSort(event, 'cost')}>Cost&nbsp;<Icon name={`sort${this.state.cost}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-health' onClick={event => this.handleSort(event, 'health')}>Health&nbsp;<Icon name={`sort${this.state.health}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-armor' onClick={event => this.handleSort(event, 'armor')}>Armor&nbsp;<Icon name={`sort${this.state.armor}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-magic-resist' onClick={event => this.handleSort(event, 'magicResist')}>MR&nbsp;<Icon name={`sort${this.state.magicResist}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-dps' onClick={event => this.handleSort(event, 'dps')}>DPS&nbsp;<Icon name={`sort${this.state.dps}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-attack-damage' onClick={event => this.handleSort(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort${this.state.attackDamage}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-attack-speed' onClick={event => this.handleSort(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort${this.state.attackSpeed}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-range' onClick={event => this.handleSort(event, 'range')}>Range&nbsp;<Icon name={`sort${this.state.range}`}/></th>
              </tr>
              <Loader id='ChampionOverviewDesktop-loader' active={this.state.loading}/>
              {champions}
            </tbody>
          </table>
        </div>
      </Responsive>
    ]
  }
}

export default ChampionsOverview;
