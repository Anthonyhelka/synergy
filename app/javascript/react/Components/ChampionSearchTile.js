import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Responsive, Card, Header, Label, Image } from 'semantic-ui-react';

class ChampionSearchTile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, key) {
    browserHistory.push(`/champions/${key}`);
    window.location.reload();
  }

  render() {
    const pathToIcon = require.context('../../../assets/images/icons', true);

    return [
        <Responsive maxWidth={1023}>
          <div id='champion-search-icon-container'>
            <Image id='champion-search-icon-tablet-mobile' className={`tier-${this.props.champion.cost}`} onClick={event => this.handleClick(event, `${this.props.champion.key}`)} src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />
          </div>
        </Responsive>,

            <div id='ChampionSearchDesktop-champions-item-container'>
              <div id='ChampionSearchDesktop-champions-item-label' className={`tier-${this.props.champion.cost}`}>{this.props.champion.cost}</div>
              <Image id='ChampionSearchDesktop-champions-item-image' className={`tier-${this.props.champion.cost}`} onClick={event => this.handleClick(event, `${this.props.champion.key}`)} src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />
            </div>
    ];
  }
}

export default ChampionSearchTile;
