import React, { Component } from 'react';
import { Image, List, Popup, Grid, Container, Header } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

class SynergyTile extends Component {
  constructor(props) {
  super(props);
  }

  render(){
    this.props.origin.champions.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let champions = this.props.origin.champions.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    const pathToIcon = require.context('../../../../public/synergies', true);

    return (
      <div>
        <Container fluid textAlign='center'>

        <Popup inverted={true} wide position='top center' hideOnScroll={true} trigger={
           <Header>
              <Image src={`${pathToIcon(this.props.origin.icon , true)}`} alt={`${this.props.origin.icon}`} avatar verticalAlign='middle' />
              <br />
              {this.props.origin.name}
           </Header>
        } >
        <Grid textAlign='center'>
          <Grid.Row>
            <Header>
              <Image src={`${pathToIcon(this.props.origin.icon , true)}`} alt={`${this.props.origin.name}`} avatar verticalAlign='middle' />
            </Header>
          </Grid.Row>
          <Grid.Row>
            <p>{this.props.origin.desciption}</p>
          </Grid.Row>
        </Grid>
        </Popup>

           <List horizontal>
             {champions}
           </List>
         </Container>
      </div>
    );
  }
}

export default SynergyTile;
