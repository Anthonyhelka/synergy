import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Image, Icon, List, Header, Grid, Transition, Dimmer, Segment, Responsive, Label, Popup } from 'semantic-ui-react';

class ChampionShowTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSynergyIcon = require.context('../../../../public/synergies', true);
    const pathToSplashart = require.context('../../../../public/splasharts', true);
    const pathToAbility = require.context('../../../../public/abilities', true);
debugger
    let synergies = this.props.champion.teams.map(synergy => {
      return (
        <List.Item>
          <Popup on='click' key={synergy.id} inverted={true} wide position='top center' hideOnScroll={true} basic={true} trigger={<Image key={synergy.id} src={`${pathToSynergyIcon(synergy.icon, true)}`} avatar />} >
            <Grid textAlign='center'>
              <Grid.Row>
                <Header>
                  <Image src={`${pathToSynergyIcon(synergy.icon , true)}`} alt={`${synergy.name}`} avatar verticalAlign='middle' />
                </Header>
              </Grid.Row>
              <Grid.Row>
                <span id='synergy-popup-description'>{synergy.desciption}</span>
              </Grid.Row>
            </Grid>
          </Popup>
        </List.Item>
      )
    });

    return (
      <Segment compact textAlign='center'>
        <Grid centered divided='vertically'>
          <Grid.Row>
            <Header>{this.props.champion.name}</Header>
          </Grid.Row>
          <Grid.Row>
            <Image src={`${pathToSplashart(this.props.champion.icon, true)}`} size='small'/>
          </Grid.Row>
          <Grid.Row>
            {synergies}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ChampionShowTile;
