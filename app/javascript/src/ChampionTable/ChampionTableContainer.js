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
        <div id='ChampionTableMobile-page-container'>
          <NavigationBar />
          <div id='ChampionTableMobile-spacing-div'></div>
            <table id='ChampionTableMobile-table'>
              <tbody>
                <tr id='ChampionTableMobile-table-header-row'>
                  <th id='ChampionTableMobile-table-header-row-name' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'name' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'name')}>Name&nbsp;<Icon name={`sort ${columnStatus.name}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-traits' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'traits' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'traits')}>Traits&nbsp;<Icon name={`sort ${columnStatus.traits}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-cost' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'cost' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'cost')}>Cost&nbsp;<Icon name={`sort ${columnStatus.cost}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-health' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'health' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'health')}>Health&nbsp;<Icon name={`sort ${columnStatus.health}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-armor' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'armor' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'armor')}>Armor&nbsp;<Icon name={`sort ${columnStatus.armor}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-magicResist' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'magicResist' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'magicResist')}>MR&nbsp;<Icon name={`sort ${columnStatus.magicResist}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-dps' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'dps' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'dps')}>DPS&nbsp;<Icon name={`sort ${columnStatus.dps}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-attackDamage' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'attackDamage' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort ${columnStatus.attackDamage}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-attackSpeed' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'attackSpeed' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort ${columnStatus.attackSpeed}`}/></th>
                  <th id='ChampionTableMobile-table-header-row-range' className={`ChampionTableMobile-table-header-row-item${(this.props.selectedColumn === 'range' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'range')}>Range&nbsp;<Icon name={`sort ${columnStatus.range}`}/></th>
                </tr>
                {this.props.isFetching ? (
                  <tr id='ChampionTableMobile-loading-gears-container'>
                    <img id='ChampionTableMobile-loading-gears' src={loading_gears} />
                  </tr>
                ) : (
                  champions
                )}
              </tbody>
            </table>
        </div>
      </Responsive>,

      <Responsive key='desktop' minWidth={1024}>
        <div id='ChampionTableDesktop-page-container'>
          <NavigationBar />
          <div id='ChampionTableDesktop-spacing-div'></div>
          <table id='ChampionTableDesktop-table'>
            <tbody>
              <tr id='ChampionTableDesktop-table-header-row'>
                <th id='ChampionTableDesktop-table-header-row-name' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'name' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'name')}>Name&nbsp;<Icon name={`sort ${columnStatus.name}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-traits' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'traits' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'traits')}>Traits&nbsp;<Icon name={`sort ${columnStatus.traits}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-cost' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'cost' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'cost')}>Cost&nbsp;<Icon name={`sort ${columnStatus.cost}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-health' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'health' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'health')}>Health&nbsp;<Icon name={`sort ${columnStatus.health}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-armor' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'armor' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'armor')}>Armor&nbsp;<Icon name={`sort ${columnStatus.armor}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-magicResist' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'magicResist' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'magicResist')}>MR&nbsp;<Icon name={`sort ${columnStatus.magicResist}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-dps' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'dps' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'dps')}>DPS&nbsp;<Icon name={`sort ${columnStatus.dps}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-attackDamage' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'attackDamage' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackDamage')}>Atk. Dmg.&nbsp;<Icon name={`sort ${columnStatus.attackDamage}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-attackSpeed' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'attackSpeed' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'attackSpeed')}>Atk. Speed&nbsp;<Icon name={`sort ${columnStatus.attackSpeed}`}/></th>
                <th id='ChampionTableDesktop-table-header-row-range' className={`ChampionTableDesktop-table-header-row-item${(this.props.selectedColumn === 'range' ? '-active' : '')}`} onClick={event => this.props.handleSortChange(event, 'range')}>Range&nbsp;<Icon name={`sort ${columnStatus.range}`}/></th>
              </tr>
              {this.props.isFetching ? (
                <div id='ChampionTableDesktop-loading-gears-container'>
                  <img id='ChampionTableDesktop-loading-gears' src={loading_gears} />
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
