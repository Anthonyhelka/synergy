import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { getChampion } from '../Redux/modules/championShow';
import { handleChampionShowRedirect } from '../Redux/modules/championShow';

import { Responsive } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import ChampionShowTileDesktop from './ChampionShowTileDesktop';
import ChampionShowTileMobile from './ChampionShowTileMobile';

class ChampionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChampionClick = this.handleChampionClick.bind(this);
  }

  componentDidMount() {
    this.props.getChampion(this.props.params.key);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.key !== prevProps.params.key) {
       this.props.getChampion(this.props.params.key);
    }
  }

  handleChampionClick(event, key) {
    this.props.getChampion(key);
  }

  render() {
    let championShowTileMobile;
    let championShowTileDesktop;
    if (this.props.fetched === true) {
      championShowTileMobile = (
        <ChampionShowTileMobile
          key={this.props.champion.id}
          id={this.props.champion.id}
          champion={this.props.champion}
          handleChampionClick={this.handleChampionClick}
        />
      );
      championShowTileDesktop = (
        <ChampionShowTileDesktop
          key={this.props.champion.id}
          id={this.props.champion.id}
          champion={this.props.champion}
          handleChampionClick={this.handleChampionClick}
        />
      );
    }

    return (
      <div>
        <NavigationBar />
        <Responsive maxWidth={1023}>
          {championShowTileMobile}
        </Responsive>
        <Responsive minWidth={1024}>
          {championShowTileDesktop}
        </Responsive>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    champion: state.championShow.champion,
    isFetching: state.championShow.isFetching,
    fetched: state.championShow.fetched,
    redirect: state.championShow.redirect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChampion: (championKey) => dispatch(getChampion(championKey)),
    handleChampionShowRedirect: () => dispatch(handleChampionShowRedirect())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChampionShowContainer)
