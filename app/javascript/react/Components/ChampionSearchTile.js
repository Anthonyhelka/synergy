import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { List, Responsive, Card, Header, Label, Image } from 'semantic-ui-react';

class ChampionSearchTile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, key) {
    browserHistory.push(`/champions/${key}`);
  }

  render() {
    const pathToIcon = require.context('../../../assets/images/icons', true);

    return (
      <div id='ChampionSearch-champions-item-container'>
        <div id='ChampionSearch-champions-item-label' className={`tier-${this.props.champion.cost}`}>{this.props.champion.cost}</div>
        <Image id='ChampionSearch-champions-item-image' className={`tier-${this.props.champion.cost}`} onClick={event => this.handleClick(event, `${this.props.champion.key}`)} src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />
      </div>
    );
  }
}

export default ChampionSearchTile;
