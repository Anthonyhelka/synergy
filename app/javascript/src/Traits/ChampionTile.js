import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { List, Responsive, Card, Header, Label, Image } from 'semantic-ui-react';

class ChampionTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      isHovered: false,
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(event){
    if(this.state.isHovered === false) {
      this.setState({ isHovered: true })
    } else if(this.state.isHovered === true) {
      this.setState({ isHovered: false })
    }
  }

  render() {
    const pathToIcon = require.context('../../../assets/images/icons', true);
    const pathToSplashart = require.context('../../../assets/images/splasharts', true);

    let cardId;
    let cardExtraId;
    if(this.state.isHovered === false) {
      cardId = 'traits-champion-card';
      cardExtraId = 'traits-champion-card-extra';
    } else {
      cardId = 'traits-champion-card-hover';
      cardExtraId = 'traits-champion-card-extra-hover';
    }

    return (
      <List.Item id='traits-champion-card-div'>
        <Responsive maxWidth={1023}>
          <Card as={ Link } to={`/champions/${this.props.champion.key}`}>
            <Image src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} size='tiny' />
          </Card>
        </Responsive>
        <Responsive minWidth={1024}>
          <Card id={cardId} as={ Link } to={`/champions/${this.props.champion.key}`}>
            <Image id='traits-champion-card-image' src={`${pathToSplashart(`./${this.props.champion.key}`, true)}`} onMouseEnter={event => this.handleHover(event)} onMouseLeave={event => this.handleHover(event)} size='small' />
            <Card.Content extra id={cardExtraId}><Header as='p'>{this.props.champion.name}&nbsp;&nbsp;<Label id='traits-champion-card-label' className={`tier-${this.props.champion.cost}`} content={this.props.champion.cost} size='small' /></Header></Card.Content>
          </Card>
        </Responsive>
      </List.Item>
    );
  }
}

export default ChampionTile;
