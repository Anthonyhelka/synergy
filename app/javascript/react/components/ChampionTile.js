import React, { Component } from 'react';
import { Image, List, Popup, Grid, Header } from 'semantic-ui-react';

class ChampionTile extends Component {
  constructor(props) {
  super(props);
  }

  render(){
    const pathToIcon = require.context('../../../../public/champions', true);
    const pathToAbility = require.context('../../../../public/abilities', true);

    return (
      <List.Item className='icon-div'>
        <div className={'icon-' + this.props.champion.tier_color}>
          <div>
            <Popup trigger={<Image src={`${pathToIcon(this.props.champion.icon , true)}`} alt={`${this.props.champion.name}`} size='tiny' circular floated='left' label={{ color: this.props.champion.tier_color, corner: 'right', size: 'small'}} />} inverted={true} wide position='bottom center' >
              <Grid>
                <Grid.Row>
                  <Header>
                    <Image src={`${pathToAbility(this.props.champion.icon , true)}`} alt={`${this.props.champion.name}`} avatar verticalAlign='middle'/>
                    <span>{this.props.champion.ability_name}</span>
                  </Header>
                  <p>{this.props.champion.ability_description}</p>
                </Grid.Row>
              </Grid>
            </Popup>
          </div>
        </div>
      </List.Item>
    );
  }
}

export default ChampionTile;
