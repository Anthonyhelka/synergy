import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { handleChampionSearch, handleSortChange } from '../Redux/modules/championSearch';
import { Icon, Form } from 'semantic-ui-react';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears.svg';
import ChampionSearchTile from './ChampionSearchTile';

class ChampionSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChampionClick = this.handleChampionClick.bind(this);
  }

  handleChampionClick(event, key) {
    browserHistory.push(`/champions/${key}`);
  }

  render() {
    let sortedChampions = (this.props.sort === 'up') ? this.props.filteredChampions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost)) : this.props.filteredChampions.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
    let champions = sortedChampions.map(champion => {
      return (
        <ChampionSearchTile
          key={champion.key}
          id={champion.id}
          championKey={champion.key}
          cost={champion.cost}
          seasonId={champion.season_id}
          handleChampionClick={this.handleChampionClick}
        />
      )
    });

    return (
      <div id='ChampionSearch-container'>
        <div id='ChampionSearch-form-container'>
          <Form id='ChampionSearch-form'>
            <Form.Field id='ChampionSearch-form-field'>
              <input id='ChampionSearch-form-input' placeholder='Champion Name...' value={this.props.query} onChange={this.props.handleChampionSearch} />
              <Icon id='ChampionSearch-form-sort-icon' name={`sort amount ${this.props.sort}`} onClick={this.props.handleSortChange} />
            </Form.Field>
          </Form>
        </div>
        <div id='ChampionSearch-results-container'>
          {this.props.isFetching ? (
            <img id='ChampionSearch-loading-gears' src={loading_gears} />
          ) : (
            (champions.length === 0) ? (
              <div id='ChampionSearch-no-results-alert-container'>
                <span id='ChampionSearch-no-results-alert-text'>We couldn't find any champions with the name '{this.props.query}'</span>
                <br />
                <Icon id='ChampionSearch-no-results-alert-icon' name='question' />
              </div>
            ) : (
              <div id='ChampionSearch-champions-container'>
                {champions}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allChampions: state.champions.championList,
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
