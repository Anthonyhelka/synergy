import React, { Component } from 'react';
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

  render(){
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSplashart = require.context('../../../../public/splasharts', true);
    const pathToAbility = require.context('../../../../public/abilities', true);

    let gridId;
    let cardId;
    let cardExtraId;
    if(this.state.isHovered === false) {
      gridId = 'champion-column';
      cardId = 'champion-card';
      cardExtraId = 'champion-card-extra';
    } else {
      gridId = 'champion-column-hovered';
      cardId = 'champion-card-hovered';
      cardExtraId = 'champion-card-extra-hovered';
    }

    return [
      <Responsive as={Grid.Column} id={gridId} {...Responsive.onlyMobile} key='1'>
        <Card id={cardId}>
          <Image src={`${pathToSplashart(this.props.champion.icon , true)}`} label={{ color: `${this.props.champion.tier_color}`, content: `${this.props.champion.tier}`, icon: 'dollar sign', ribbon: true }} />
          <Card.Content extra id={cardExtraId}><Header as='p'>{this.props.champion.name}</Header></Card.Content>
        </Card>
      </Responsive>,
      <Responsive as={Grid.Column} id={gridId} width='2' {...Responsive.onlyComputer} key='2'>
        <Card id={cardId}>
          <Image src={`${pathToSplashart(this.props.champion.icon , true)}`} onMouseEnter={event => this.onHover(event)} onMouseLeave={event => this.onHover(event)} label={{ color: `${this.props.champion.tier_color}`, content: `${this.props.champion.tier}`, icon: 'dollar sign', ribbon: true }} />
          <Card.Content extra id={cardExtraId}><Header as='p'>{this.props.champion.name}</Header></Card.Content>
        </Card>
      </Responsive>
    ];
  }
}

export default ChampionTile;
