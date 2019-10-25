import React, { Component } from 'react';
import { Divider, Container, Popup, Header, Grid, List, Image } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

import '../../../assets/stylesheets/Traits.scss';

class TraitTile extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    this.props.trait.champions.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let champions = this.props.trait.champions.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    const pathToTraitIcon = require.context('../../../assets/images/traits', true);

    return (
      <div>
        <Container fluid textAlign='center'>

          <Popup on='click' inverted wide position='top center' hideOnScroll basic trigger={<Header><Image src={`${pathToTraitIcon(`./${this.props.trait.key}`, true)}`} alt={`{this.props.trait.name}`} avatar verticalAlign='middle' /><br />{this.props.trait.name}</Header>}>
            <Grid textAlign='center'>
              <Grid.Row>
                <Header>
                  <Image src={`${pathToTraitIcon(`./${this.props.trait.key}`, true)}`} alt={`${this.props.trait.name}`} avatar verticalAlign='middle' />
                </Header>
              </Grid.Row>
              <Grid.Row>
                <span id='trait-popup-description'>{this.props.trait.description}</span>
              </Grid.Row>
            </Grid>
          </Popup>

          <List id='trait-list-div' horizontal size='mini'>
            {champions}
          </List>

        </Container>
      </div>
    );
  }
}

export default TraitTile;
