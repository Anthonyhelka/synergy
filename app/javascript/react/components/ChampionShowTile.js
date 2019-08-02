import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Image, Icon, List, Header, Grid, Transition, Dimmer, Segment, Responsive, Label, Popup, Divider, Container } from 'semantic-ui-react';

class ChampionShowTile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let name = (this.props.champion.name).toLowerCase();
    document.body.classList.add(`black-background-color`);
    document.body.classList.add(`background-${name}`);
  }

  componentWillUnmount() {
    let name = (this.props.champion.name).toLowerCase();
    document.body.classList.remove(`black-background-color`);
    document.body.classList.remove(`background-${name}`);
  }

  render() {
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSplashart = require.context('../../../../public/splasharts', true);
    const pathToBackdrop = require.context('../../../../public/backdrops', true);
    const pathToAbility = require.context('../../../../public/abilities', true);
    const pathToSynergyIcon = require.context('../../../../public/synergies', true);

    let synergiesContainerList = this.props.champion.teams.map(synergy => {
      return (
        <List.Item key={synergy.id}>
          <Popup on='hover' key={synergy.id} inverted={true} wide position='top center' hideOnScroll={true} basic={true} trigger={<Image key={synergy.id} src={`${pathToSynergyIcon(synergy.icon, true)}`} avatar />} >
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
      <div id='champion-show-page-container'>
      
        <Segment basic compact floated='left'>
          <Grid centered floated='left'>
            <Grid.Row>
              <Header id='show-champion-name' as='p'>{this.props.champion.name}</Header>
            </Grid.Row>
            <Grid.Row>
              <List horizontal>
                {synergiesContainerList}
                </List>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment id='champion-show-container' compact floated='left' >
          <Grid centered divided='vertically'>
            <Grid.Row>
              <Header>{this.props.champion.name}</Header>
            </Grid.Row>
            <Grid.Row>
              <Image src={`${pathToSplashart(this.props.champion.icon, true)}`} size='small'/>
            </Grid.Row>
            <Grid.Row>
              {synergiesContainerList}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default ChampionShowTile;
