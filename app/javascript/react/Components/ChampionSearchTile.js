import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Responsive, Card, Header, Label, Image } from 'semantic-ui-react';

import '../../../assets/stylesheets/ChampionSearch.scss';

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

    return (
      <List.Item>
        <div id='champion-icon-container'>
          <div id='champion-icon-label' className={`tier-${this.props.champion.cost}`}>{this.props.champion.cost}</div>
          <Image id='champion-icon' className={`tier-${this.props.champion.cost}`} onClick={event => this.handleClick(event, `${this.props.champion.key}`)} src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} />
        </div>
      </List.Item>
    );
  }
}

export default ChampionSearchTile;
