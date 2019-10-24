import React, { Component } from 'react';
import { Link } from 'react-router';
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
    const championFileName = `./${this.props.champion.key}`;
    const pathToIcon = require.context('../../../../../public/icons', true);
    const pathToSplashart = require.context('../../../../../public/splasharts', true);

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
      <List.Item id='champion-card-div'>
        <Responsive maxWidth={1023}>
          <Card as={ Link } to={`/champions/${this.props.champion.key}`}>
            <Image src={`${pathToIcon(championFileName, true)}`} size='tiny' />
          </Card>
        </Responsive>
        <Responsive minWidth={1024}>
          <Card id={cardId} as={ Link } to={`/champions/${this.props.champion.key}`}>
            <Image id='champion-card-image' src={`${pathToSplashart(championFileName, true)}`} onMouseEnter={event => this.handleHover(event)} onMouseLeave={event => this.handleHover(event)} size='small' />
            <Card.Content extra id={cardExtraId}><Header as='p'>{this.props.champion.name}&nbsp;&nbsp;<Label id='champion-card-label' className={`tier-${this.props.champion.cost}`} content={this.props.champion.cost} size='small' /></Header></Card.Content>
          </Card>
        </Responsive>
      </List.Item>
    );
  }
}

export default ChampionTile;
