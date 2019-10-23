import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon, Table } from 'semantic-ui-react';

import '../../../../assets/stylesheets/ChampionShow.css';

class ChampionShowTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      update: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, name) {
    browserHistory.push(`/champions/${name}`);
    window.location.reload();
  }

  render() {
    const championFileName = `./${this.props.champion.key}`;
    const pathToIcon = require.context('../../../../../public/icons', true);
    const pathToBanner = require.context('../../../../../public/banners', true);
    const pathToAbility = require.context('../../../../../public/abilities', true);
    const pathToRender = require.context('../../../../../public/renders', true);
    const pathToSynergyIcon = require.context('../../../../../public/synergies', true);

    let synergiesIconList = this.props.champion.teams.map(synergy => {
      return (
        <div id='champion-header-synergy'>
          <Image src={`${pathToSynergyIcon(synergy.icon, true)}`}  />
          <span>&nbsp;{synergy.name}</span>
        </div>
      )
    });

    let abilityStatList = this.props.champion.ability.stats.map(stat => {
      return (
        <p>{stat.type}: {stat.value}</p>
      )
    });

    return (
      <div>
        <Segment id='page-container'>

          <Segment id='search-container'>
            Search Container
          </Segment>

          <Segment id='champion-container'>
            <Grid stackable>

              <Grid.Row id='champion-row-one' columns='1'>
                <Grid.Column>
                  <Segment id='champion-header'>
                    <Label id='champion-header-tier' className={`tier-${this.props.champion.cost}`} attached='top left'><Icon fitted name='dollar sign' />&nbsp;{this.props.champion.cost}</Label>
                    <div id='champion-header-title'><span>{this.props.champion.name}</span><p>{this.props.champion.title}</p></div>
                    <Image id='champion-header-image' src={`${pathToBanner(championFileName, true)}`} />
                    <div id='champion-header-synergies-container'>
                      {synergiesIconList}
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row id='champion-row-two' columns='2' stretched>
                <Grid.Column width='5'>
                  <Segment id='champion-left-column' basic>
                    <Grid>
                      <Grid.Row id='champion-ability-row' columns='1'>

                        <Grid.Column>
                          <Grid stackable>
                            <Grid.Row id='champion-ability-row-one' width='16'>
                              <Grid.Column id='champion-ability-title-container' width='10'>
                                <Segment id='champion-ability-title-container' basic>
                                  <span>{this.props.champion.ability.name}</span>
                                </Segment>
                              </Grid.Column>
                              <Grid.Column id='champion-ability-type-mana-container' width='6'>
                                <Segment id='champion-ability-type-container' basic>
                                  <span>{this.props.champion.ability.type}</span>
                                </Segment>
                                <Segment id='champion-ability-mana-container' basic>
                                  <span><Icon name='tint' />{this.props.champion.ability.mana_start} / {this.props.champion.ability.mana_cost}</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                            <Grid.Row id='champion-ability-row-two'>
                              <Grid.Column id='champion-ability-image-container' width='4' stretched>
                                <Segment id='champion-ability-image' basic>
                                  <Image src={`${pathToAbility(championFileName, true)}`}  />
                                </Segment>
                              </Grid.Column>
                              <Grid.Column id='champion-ability-description-container' width='12'>
                                <Segment id='champion-ability-description' basic>
                                  <span>{this.props.champion.ability.description}</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                            <Grid.Row id='champion-ability-row-three'>
                              <Grid.Column id='champion-ability-ability-extra-container' width='16'>
                                <Segment id='champion-ability-ability-extra' basic>
                                  <span>{abilityStatList}</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                          </Grid>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row id='champion-render-row' columns='1'>
                        <Grid.Column id='champion-render-container'>
                          <Segment id='champion-render' basic>
                            <Image src={`${pathToRender(championFileName, true)}`}  />
                          </Segment>
                        </Grid.Column>
                      </Grid.Row>

                    </Grid>
                  </Segment>
                </Grid.Column>

                <Grid.Column width='11'>
                  <Segment id='right-column'>
                    <Grid.Row columns='3'>
                      <Grid.Column>
                        <Segment id='statistics-container'>
                          <List id='statistics-list' horizontal>
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/health.png')} />
                              <List.Content>
                                <List.Header>Health</List.Header>
                                  {this.props.champion.stats.defense.health}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/armor.png')} />
                              <List.Content>
                                <List.Header>Armor</List.Header>
                                  {this.props.champion.stats.defense.armor}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/magic_resist.png')} />
                              <List.Content>
                                <List.Header>Magic Resist</List.Header>
                                  {this.props.champion.stats.defense.magic_resist}
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/attack_damage.png')} />
                              <List.Content>
                                <List.Header>Attack Damage</List.Header>
                                  {this.props.champion.stats.offense.damage}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/attack_speed.png')} />
                              <List.Content>
                                <List.Header>Attack Speed</List.Header>
                                  {this.props.champion.stats.offense.attack_speed}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistics-list-item'>
                              <Image src={require('../../../../../public/stat_icons/attack_range.png')} />
                              <List.Content>
                                <List.Header>Range</List.Header>
                                  {this.props.champion.stats.offense.range}
                                </List.Content>
                            </List.Item>
                          </List>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column>
                        <Segment>
                          Synergy 1
                        </Segment>
                      </Grid.Column>
                      <Grid.Column>
                        <Segment>
                          Synergy 2
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Segment>
                </Grid.Column>
              </Grid.Row>


            </Grid>
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default ChampionShowTile;




// <Grid>
//   <Grid.Row columns='6'>
//     <Grid.Column>
//       <Segment>
//         <p>Health</p>
//         <p>{this.props.champion.stats.defense.health}</p>
//       </Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment>
//         <p>Armor</p>
//         <p>{this.props.champion.stats.defense.armor}</p>
//       </Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment>
//         <p>Magic Resist</p>
//         <p>{this.props.champion.stats.defense.magic_resist}</p>
//       </Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment>
//         <p>Attack Damage</p>
//         <p>{this.props.champion.stats.offense.damage}</p>
//       </Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment>
//         <p>Attack Speed</p>
//         <p>{this.props.champion.stats.offense.attack_speed}</p>
//       </Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment>
//         <p>Attack Range</p>
//         <p>{this.props.champion.stats.offense.range}</p>
//       </Segment>
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
