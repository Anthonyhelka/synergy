import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Table, Icon, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleSortChange } from '../Redux/modules/championTable';
import NavigationBar from '../Components/NavigationBar';
import ChampionTableTile from './ChampionTableTile';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears_white.svg';

class ChampionTableContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChampionClick = this.handleChampionClick.bind(this);
  }

  componentDidMount() {
    document.body.classList.add(`grey-background-color`);
  }

  componentWillUnmount() {
    document.body.classList.remove(`grey-background-color`);
  }

  handleChampionClick(event, key){
    browserHistory.push(`/champions/${key}`);
  }

  render() {
    let columnStatus = { name: '', traits: '', cost: '', health: '', armor: '', magicResist: '', dps: '', attackDamage: '', attackSpeed: '', range: '' }

    switch(this.props.selectedColumn) {
      case 'name':
        this.props.direction === 'ascending' ? (
          columnStatus.name = 'ascending',
          this.props.champions.sort(function(a, b) { return (a.key < b.key) ? -1 : ( a.key > b.key) ? 1 : 0; })
        ) : (
          columnStatus.name = 'descending',
          this.props.champions.sort(function(a, b) { return (b.key < a.key) ? -1 : (b.key > a.key) ? 1 : 0; })
        );
        break;
      case 'traits':
        this.props.direction === 'ascending' ? (
          columnStatus.traits = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.traits.length) - parseFloat(b.traits.length))
        ) : (
          columnStatus.traits = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.traits.length) - parseFloat(a.traits.length))
        );
        break;
      case 'cost':
        this.props.direction === 'ascending' ? (
          columnStatus.cost = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
        ) : (
          columnStatus.cost = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
        );
        break;
      case 'health':
        this.props.direction === 'ascending' ? (
          columnStatus.health = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.defense.health[0]) - parseFloat(b.stats.defense.health[0]))
        ) : (
          columnStatus.health = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.defense.health[0]) - parseFloat(a.stats.defense.health[0]))
        );
        break;
      case 'armor':
        this.props.direction === 'ascending' ? (
          columnStatus.armor = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.defense.armor) - parseFloat(b.stats.defense.armor))
        ) : (
          columnStatus.armor = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.defense.armor) - parseFloat(a.stats.defense.armor))
        );
        break;
      case 'magicResist':
        this.props.direction === 'ascending' ? (
          columnStatus.magicResist = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.defense.magic_resist) - parseFloat(b.stats.defense.magic_resist))
        ) : (
          columnStatus.magicResist = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.defense.magic_resist) - parseFloat(a.stats.defense.magic_resist))
        );
        break;
      case 'dps':
        this.props.direction === 'ascending' ? (
          columnStatus.dps = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.offense.attack_damage[0] * a.stats.offense.attack_speed) - parseFloat(b.stats.offense.attack_damage[0] * b.stats.offense.attack_speed))
        ) : (
          columnStatus.dps = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.offense.attack_damage[0] * b.stats.offense.attack_speed) - parseFloat(a.stats.offense.attack_damage[0] * a.stats.offense.attack_speed))
        );
        break;
      case 'attackDamage':
        this.props.direction === 'ascending' ? (
          columnStatus.attackDamage = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.offense.attack_damage[0]) - parseFloat(b.stats.offense.attack_damage))
        ) : (
          columnStatus.attackDamage = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.offense.attack_damage[0]) - parseFloat(a.stats.offense.attack_damage))
        );
        break;
      case 'attackSpeed':
        this.props.direction === 'ascending' ? (
          columnStatus.attackSpeed = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.offense.attack_speed) - parseFloat(b.stats.offense.attack_speed))
        ) : (
          columnStatus.attackSpeed = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.offense.attack_speed) - parseFloat(a.stats.offense.attack_speed))
        );
        break;
      case 'range':
        this.props.direction === 'ascending' ? (
          columnStatus.range = 'ascending',
          this.props.champions.sort((a, b) => parseFloat(a.stats.offense.range) - parseFloat(b.stats.offense.range))
        ) : (
          columnStatus.range = 'descending',
          this.props.champions.sort((a, b) => parseFloat(b.stats.offense.range) - parseFloat(a.stats.offense.range))
        );
        break;
      default:
        this.props.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
        break;
    }

    let champions = this.props.champions.map(champion => {
      return (
        <ChampionTableTile
          key={champion.id}
          id={champion.id}
          championKey={champion.key}
          seasonId={champion.season_id}
          name={champion.name}
          traits={champion.traits}
          cost={champion.cost}
          health={champion.stats.defense.health}
          armor={champion.stats.defense.armor}
          magicResist={champion.stats.defense.magic_resist}
          attackDamage={champion.stats.offense.attack_damage}
          attackSpeed={champion.stats.offense.attack_speed}
          range={champion.stats.offense.range}
          columnStatus={columnStatus}
          handleChampionClick = {this.handleChampionClick}
        />
      )
    });

    return [
      <Responsive key='mobile/tablet' maxWidth={1023}>
        <div id='ChampionOverviewMobile-page-container'>
          <NavigationBar />
          <div id='ChampionOverviewMobile-spacing-div'></div>
            <table id='ChampionOverviewMobile-table'>
              <tbody>
                <tr id='ChampionOverviewMobile-table-header-row'>
                  <th id='ChampionOverviewMobile-table-header-row-name' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'name' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'name')}>Name&nbsp;<Icon name={`sort ${columnStatus.name}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-traits' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'traits' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'traits')}>Traits&nbsp;<Icon name={`sort ${columnStatus.traits}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-cost' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'cost' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'cost')}>Cost&nbsp;<Icon name={`sort ${columnStatus.cost}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-health' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'health' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'health')}>Health&nbsp;<Icon name={`sort ${columnStatus.health}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-armor' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'armor' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'armor')}>Armor&nbsp;<Icon name={`sort ${columnStatus.armor}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-magicResist' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'magicResist' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'magicResist')}>MR&nbsp;<Icon name={`sort ${columnStatus.magicResist}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-dps' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'dps' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'dps')}>DPS&nbsp;<Icon name={`sort ${columnStatus.dps}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-attackDamage' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'attackDamage' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort ${columnStatus.attackDamage}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-attackSpeed' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'attackSpeed' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort ${columnStatus.attackSpeed}`}/></th>
                  <th id='ChampionOverviewMobile-table-header-row-range' className={`ChampionOverviewMobile-table-header-row-item${(this.props.selectedColumn === 'range' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'range')}>Range&nbsp;<Icon name={`sort ${columnStatus.range}`}/></th>
                </tr>
                {this.props.isFetching ? (
                  <tr id='ChampionOverviewMobile-loading-gears-container'>
                    <img id='ChampionOverviewMobile-loading-gears' src={loading_gears} />
                  </tr>
                ) : (
                  champions
                )}
              </tbody>
            </table>
        </div>
      </Responsive>,

      <Responsive key='desktop' minWidth={1024}>
        <div id='ChampionOverviewDesktop-page-container'>
          <NavigationBar />
          <div id='ChampionOverviewDesktop-spacing-div'></div>
          <table id='ChampionOverviewDesktop-table'>
            <tbody>
              <tr id='ChampionOverviewDesktop-table-header-row'>
                <th id='ChampionOverviewDesktop-table-header-row-name' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'name' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'name')}>Name&nbsp;<Icon name={`sort ${columnStatus.name}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-traits' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'traits' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'traits')}>Traits&nbsp;<Icon name={`sort ${columnStatus.traits}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-cost' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'cost' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'cost')}>Cost&nbsp;<Icon name={`sort ${columnStatus.cost}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-health' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'health' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'health')}>Health&nbsp;<Icon name={`sort ${columnStatus.health}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-armor' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'armor' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'armor')}>Armor&nbsp;<Icon name={`sort ${columnStatus.armor}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-magicResist' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'magicResist' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'magicResist')}>MR&nbsp;<Icon name={`sort ${columnStatus.magicResist}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-dps' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'dps' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'dps')}>DPS&nbsp;<Icon name={`sort ${columnStatus.dps}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-attackDamage' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'attackDamage' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort ${columnStatus.attackDamage}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-attackSpeed' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'attackSpeed' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort ${columnStatus.attackSpeed}`}/></th>
                <th id='ChampionOverviewDesktop-table-header-row-range' className={`ChampionOverviewDesktop-table-header-row-item${(this.props.selectedColumn === 'range' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'range')}>Range&nbsp;<Icon name={`sort ${columnStatus.range}`}/></th>
              </tr>
              {this.props.isFetching ? (
                <div id='ChampionOverviewDesktop-loading-gears-container'>
                  <img id='ChampionOverviewDesktop-loading-gears' src={loading_gears} />
                </div>
              ) : (
                champions
              )}
            </tbody>
          </table>
        </div>
      </Responsive>
    ]
  }
}

const mapStateToProps = (state) => {
  return {
    champions: state.championTable.champions,
    isFetching: state.champions.isFetching,
    selectedColumn: state.championTable.selectedColumn,
    direction: state.championTable.direction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSortChange: (event, selectedColumn) => dispatch(handleSortChange(event, selectedColumn))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampionTableContainer)
