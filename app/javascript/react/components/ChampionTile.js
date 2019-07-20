import React, { Component } from 'react';
import { Card, Image, Icon, List, Header, Grid } from 'semantic-ui-react';

class ChampionTile extends Component {
  constructor(props) {
  super(props);
  }

  render(){
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSplashart = require.context('../../../../public/splasharts', true);
    const pathToAbility = require.context('../../../../public/abilities', true);

    return (
      <Grid.Column id='champion-column' width='2'>
        <Card id='champion-card'>
          <Image src={`${pathToSplashart(this.props.champion.icon , true)}`} />
          <Card.Content extra id='champion-card-name'><Header as='p'>{this.props.champion.name}</Header></Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default ChampionTile;
