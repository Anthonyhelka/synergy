import React, { Component } from 'react';
import { Image, List, Popup, Grid, Header } from 'semantic-ui-react';

class ChampionTile extends Component {
  render(){
    const pathToIcon = require.context('../../../../public/champions', true);
    const pathToAbility = require.context('../../../../public/abilities', true);

    return (
      <List.Item>
        <div className={'icon-' + props.champion.tier_color}>
          <dd>
            <dl>
              <div>
                <Popup trigger={<Image src={`${pathToIcon(props.champion.icon , true)}`} alt={`${props.champion.name}`} size='tiny' circular label={{ color: props.champion.tier_color, corner: 'right', size: 'small'}} />} inverted={true} wide position='bottom left' >
                  <Grid>
                    <Grid.Row>
                      <Header>
                        <Image src={`${pathToAbility(props.champion.icon , true)}`} alt={`${props.champion.name}`} avatar verticalAlign='middle'/>
                        <span>{props.champion.ability_name}</span>
                        <p>{props.champion.ability_description}</p>
                      </Header>
                    </Grid.Row>
                  </Grid>
                </Popup>
              </div>
            </dl>
          </dd>
        </div>
      </List.Item>
    );
  }
}

export default ChampionTile;
