import React, { Component } from 'react';

import { connect } from 'react-redux';
import { handleChampionSearch, handleSortChange } from '../modules/championSearch';

import { Responsive, Image, Segment, Search, Button, Icon, Dropdown, Form, List, Dimmer, Loader } from 'semantic-ui-react';

import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears.svg';
import ChampionSearchTile from './ChampionSearchTile';

class ChampionSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let championsSortOrder;
    let champions;
    if (this.props.query === '') {
      championsSortOrder = (this.props.sort === 'up') ? this.props.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.props.champions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      champions = championsSortOrder.map(champion => {
        return (
          <ChampionSearchTile
            key={champion.id}
            id={champion.id}
            champion={champion}
          />
        )
      });
    } else {
      championsSortOrder = (this.props.sort === 'up') ? this.props.filteredChampions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.props.filteredChampions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      champions = championsSortOrder.map(champion => {
        return (
          <ChampionSearchTile
            key={champion.id}
            id={champion.id}
            champion={champion}
          />
        )
      });
    }

    return (
      <div id='ChampionSearch-container'>
        <div id='ChampionSearch-form-container'>
          <Form id='ChampionSearch-form'>
            <Form.Field id='ChampionSearch-form-field' value={this.props.query} onChange={this.props.handleChampionSearch}>
              <input id='ChampionSearch-form-input' placeholder='Champion Name...' />
              <Icon id='ChampionSearch-form-sort-icon' name={`sort amount ${this.props.sort}`} onClick={this.props.handleSortChange} />
            </Form.Field>
          </Form>
        </div>
        <div id='ChampionSearch-results-container'>
          {this.props.isFetching ? (
            <Image id='ChampionSearch-loading-gears' src={loading_gears} />
          ) : (
            <div id='ChampionSearch-champions-container'>
              {champions}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champions: state.champions.championList,
    isFetching: state.champions.isFetching,
    query: state.championSearch.query,
    filteredChampions: state.championSearch.filteredChampions,
    sort: state.championSearch.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChampionSearch: (event) => dispatch(handleChampionSearch(event)),
    handleSortChange: () => dispatch(handleSortChange())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampionSearch)
