import React, { Component } from 'react';
import { Image, List, Popup, Grid, Container, Header, Divider } from 'semantic-ui-react';

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

    let upgradeConditional;
    if (this.props.origin.upgrade_3_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.origin.upgrade_1_number}&nbsp;&nbsp;{this.props.origin.upgrade_1_description}</span><br /><span>{this.props.origin.upgrade_2_number}&nbsp;&nbsp;{this.props.origin.upgrade_2_description}</span><br /><span>{this.props.origin.upgrade_3_number}&nbsp;&nbsp;{this.props.origin.upgrade_3_description}</span></div>)
    } else if (this.props.origin.upgrade_2_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.origin.upgrade_1_number}&nbsp;&nbsp;{this.props.origin.upgrade_1_description}</span><br /><span>{this.props.origin.upgrade_2_number}&nbsp;&nbsp;{this.props.origin.upgrade_2_description}</span></div>)
    } else if (this.props.origin.upgrade_1_number !== null) {
      upgradeConditional = (<div><Divider /><span>{this.props.origin.upgrade_1_number}&nbsp;&nbsp;{this.props.origin.upgrade_1_description}</span></div>)
    } else {
      upgradeConditional = (<span></span>)
    }

    const pathToIcon = require.context('../../../../public/synergies', true);

    return (
      <div>
        <Container fluid textAlign='center'>

        <Popup inverted={true} wide position='top center' hideOnScroll={true} trigger={<Header><Image src={`${pathToIcon(this.props.origin.icon , true)}`} alt={`${this.props.origin.icon}`} avatar verticalAlign='middle' /><br />{this.props.origin.name}</Header>} >
        <Grid textAlign='center'>
          <Grid.Row>
            <Header>
              <Image src={`${pathToIcon(this.props.origin.icon , true)}`} alt={`${this.props.origin.name}`} avatar verticalAlign='middle' />
            </Header>
          </Grid.Row>
          <Grid.Row>
            <span className='synergy-description'>{this.props.origin.desciption}</span>
            {upgradeConditional}
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
