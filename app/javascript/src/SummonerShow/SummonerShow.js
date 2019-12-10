import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSummoner, updateSummoner } from '../Redux/modules/summonerShow';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image, Segment, Divider } from 'semantic-ui-react';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears_white.svg';

import NavigationBar from '../Components/NavigationBar';
import SummonerSearch from '../Components/SummonerSearch';

class SummonerShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.add(`grey-background-color`);
    this.props.getSummoner(this.props.params.name);
  }

  componentWillUnmount() {
    document.body.classList.remove(`grey-background-color`);
  }

  render() {
    const pathToRankedEmblem = require.context('../../../assets/images/emblems', true);

    return (
      <div id='SummonerShow-page-container'>
        <NavigationBar />
          {this.props.isFetching ? (
            <div id='SummonerShow-loading-gears-container'>
              <img id='SummonerShow-loading-gears' src={loading_gears} />
            </div>
          ) : (
            <div id='SummonerShow-summoner-container'>
              {this.props.message.content !== '' ? (<div class={`SummonerShow-message-${(this.props.message.type).toLowerCase()}`}>{this.props.message.content}</div>) : (<span></span>)}
              {this.props.valid ? (
                  <div id='SummonerShow-summoner-valid-container'>
                    <div id='SummonerShow-summoner-header-container'>
                    <div id='SummonerShow-summoner-name-icon-container'>
                      <span id='SummonerShow-summoner-name'>{this.props.summoner.name}</span>
                      <img id='SummonerShow-summoner-icon' src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/${this.props.summoner.icon}.png`} />
                    </div>
                    <button id='SummonerShow-summoner-update-button' onClick={this.props.updateSummoner}>Update</button>
                  </div>
                  <Divider id='SummonerShow-divider' />
                  <div id='SummonerShow-summoner-ranked-container'>
                    <img id='SummonerShow-summoner-tier' src={`${pathToRankedEmblem(`./${(this.props.summoner.ranked_data.tier).toLowerCase()}`, true)}`} />
                    {this.props.summoner.ranked_data.tier !== 'Unranked' ? (<div id='SummonerShow-summoner-rank-details'>{this.props.summoner.ranked_data.tier} {this.props.summoner.ranked_data.division} {this.props.summoner.ranked_data.league_points}LP</div>) : (<div id='SummonerShow-summoner-rank-details'>Unranked</div>)}
                    <div id='SummonerShow-summoner-record'><span id='SummonerShow-summoner-record-wins'>{this.props.summoner.ranked_data.wins}W</span> / <span id='SummonerShow-summoner-record-losses'>{this.props.summoner.ranked_data.losses}L</span></div>
                    {this.props.summoner.ranked_data.tier !== 'Unranked' ? (<span id='SummonerShow-summoner-win-percentage'>({(this.props.summoner.ranked_data.wins / (this.props.summoner.ranked_data.wins + this.props.summoner.ranked_data.losses) * 100).toFixed(2)}%)</span>) : (<span></span>)}
                  </div>
                  <Divider id='SummonerShow-divider' />
                  <div id='SummonerShow-summoner-match-history-container'>
                    <span>Match History</span>
                    <div className='SummonerShow-message-warning'>Coming Soon!</div>
                  </div>
                </div>
               ) : (
                <div id='SummonerShow-summoner-invalid-container'>
                  <p>This Summoner Doesn't Exist!</p>
                </div>
               )}
            </div>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summoner: state.summonerShow.summoner,
    message: state.summonerShow.message,
    valid: state.summonerShow.valid,
    isFetching: state.summonerShow.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummoner: (summonerName) => dispatch(getSummoner(summonerName)),
    updateSummoner: () => dispatch(updateSummoner())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummonerShow)
