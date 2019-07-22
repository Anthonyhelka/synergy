import React, { Component } from 'react';
import { Image, Popup, Grid, Container, Header, Divider, Card, Responsive } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

class SynergyTile extends Component {
  constructor(props) {
  super(props);
  }

  render(){

    this.props.synergy.champions.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let champions = this.props.synergy.champions.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    let upgradeConditional;
    if (this.props.synergy.upgrade_3_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.synergy.upgrade_1_number}&nbsp;&nbsp;{this.props.synergy.upgrade_1_description}</span><br /><span>{this.props.synergy.upgrade_2_number}&nbsp;&nbsp;{this.props.synergy.upgrade_2_description}</span><br /><span>{this.props.synergy.upgrade_3_number}&nbsp;&nbsp;{this.props.synergy.upgrade_3_description}</span></div>)
    } else if (this.props.synergy.upgrade_2_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.synergy.upgrade_1_number}&nbsp;&nbsp;{this.props.synergy.upgrade_1_description}</span><br /><span>{this.props.synergy.upgrade_2_number}&nbsp;&nbsp;{this.props.synergy.upgrade_2_description}</span></div>)
    } else if (this.props.synergy.upgrade_1_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.synergy.upgrade_1_number}&nbsp;&nbsp;{this.props.synergy.upgrade_1_description}</span></div>)
    } else {
      upgradeConditional = (<span></span>)
    }

    const pathToIcon = require.context('../../../../public/synergies', true);

    return (
      <div>
        <Container fluid textAlign='center'>

          <Popup on='click' inverted={true} wide position='top center' hideOnScroll={true} basic={true} trigger={<Header><Image src={`${pathToIcon(this.props.synergy.icon , true)}`} alt={`${this.props.synergy.icon}`} avatar verticalAlign='middle' /><br />{this.props.synergy.name}</Header>} >
            <Grid textAlign='center'>
              <Grid.Row>
                <Header>
                  <Image src={`${pathToIcon(this.props.synergy.icon , true)}`} alt={`${this.props.synergy.name}`} avatar verticalAlign='middle' />
                </Header>
              </Grid.Row>
              <Grid.Row>
                <span className='popup-description'>{this.props.synergy.desciption}</span>
                {upgradeConditional}
              </Grid.Row>
            </Grid>
          </Popup>

          <Grid textAlign='center'>
            <Responsive as={Grid.Row} columns='3' {...Responsive.onlyMobile}>
              {champions}
            </Responsive>
            <Responsive as={Grid.Row} {...Responsive.onlyTablet}>
              {champions}
            </Responsive>
            <Responsive as={Grid.Row} {...Responsive.onlyComputer}>
              {champions}
            </Responsive>
          </Grid>

         </Container>
      </div>
    );
  }
}

export default SynergyTile;
