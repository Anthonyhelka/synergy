import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Image, Icon, List, Header, Grid, Transition, Dimmer, Segment, Responsive, Label } from 'semantic-ui-react';

class ChampionTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      isHovered: false,
    }
    this.onHover = this.onHover.bind(this)
  }

  onHover(event){
    if(this.state.isHovered === false) {
      this.setState({ isHovered: true })
    } else if(this.state.isHovered === true) {
      this.setState({ isHovered: false })
    }
  }

  render() {
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSplashart = require.context('../../../../public/splasharts', true);
    const pathToAbility = require.context('../../../../public/abilities', true);

    let cardId;
    let cardExtraId;
    if(this.state.isHovered === false) {
      cardId = 'champion-card';
      cardExtraId = 'champion-card-extra';
    } else {
      cardId = 'champion-card-hover';
      cardExtraId = 'champion-card-extra-hover';
    }

    return (
      <List.Item>
        <Responsive maxWidth={1023}>
          <Card as={ Link } to={`/champions/${this.props.champion.name}`}>
            <Image src={`${pathToIcon(this.props.champion.icon, true)}`} size='tiny' />
          </Card>
        </Responsive>
        <Responsive minWidth={1024}>
          <Card id={cardId} as={ Link } to={`/champions/${this.props.champion.name}`}>
            <Image src={`${pathToSplashart(this.props.champion.icon, true)}`} onMouseEnter={event => this.onHover(event)} onMouseLeave={event => this.onHover(event)} size='small' />
            <Card.Content extra id={cardExtraId}><Header as='p'>{this.props.champion.name}&nbsp;&nbsp;<Label content={this.props.champion.tier} color={this.props.champion.tier_color} size='mini' icon='dollar sign' /></Header></Card.Content>
          </Card>
        </Responsive>
      </List.Item>
    );
  }
}

export default ChampionTile;
