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

    let renderName = (this.props.champion.name).replace(/\s/g, '');
    debugger
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
                    <Label id='champion-header-tier' className={`${this.props.champion.tier_color}-tier`} attached='top left'><Icon fitted name='dollar sign' />&nbsp;{this.props.champion.tier}</Label>
                    <div id='champion-header-title'><span>{this.props.champion.name}</span><p>{this.props.champion.title}</p></div>
                    <Image id='champion-header-image' src={`${pathToBanner(this.props.champion.icon, true)}`} />
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
                                  <span>{this.props.champion.ability_name}</span>
                                </Segment>
                              </Grid.Column>
                              <Grid.Column id='champion-ability-type-mana-container' width='6'>
                                <Segment id='champion-ability-type-container' basic>
                                  <span>{this.props.champion.ability_type}</span>
                                </Segment>
                                <Segment id='champion-ability-mana-container' basic>
                                  <span><Icon name='tint' />{this.props.champion.starting_mana} / {this.props.champion.mana_cost}</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                            <Grid.Row id='champion-ability-row-two'>
                              <Grid.Column id='champion-ability-image-container' width='4' stretched>
                                <Segment id='champion-ability-image' basic>
                                  <Image src={`${pathToAbility(this.props.champion.icon, true)}`}  />
                                </Segment>
                              </Grid.Column>
                              <Grid.Column id='champion-ability-description-container' width='12'>
                                <Segment id='champion-ability-description' basic>
                                  <span>{this.props.champion.ability_description}</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                            <Grid.Row id='champion-ability-row-three'>
                              <Grid.Column id='champion-ability-ability-extra-container' width='16'>
                                <Segment id='champion-ability-ability-extra' basic>
                                  <span>Damage: [200, 350, 500]</span>
                                </Segment>
                              </Grid.Column>
                            </Grid.Row>

                          </Grid>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row id='champion-render-row' columns='1'>
                        <Grid.Column id='champion-render-container'>
                          <Segment id='champion-render' basic>
                            <Image src={`${pathToRender(this.props.champion.icon, true)}`}  />
                          </Segment>
                        </Grid.Column>
                      </Grid.Row>

                    </Grid>
                  </Segment>
                </Grid.Column>

                <Grid.Column width='11'>
                  <Segment>
                    <Grid.Row columns='3'>
                      <Grid.Column>
                        <Segment>
                          Statistics
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

                          // <Segment id='champion-ability-image-container' basic>
                          //   <Image src={`${pathToAbility(this.props.champion.icon, true)}`}  />
                          // </Segment>



                          // <Grid.Row id='champion-row-three' columns='1'>
                          //   <Grid.Column>
                          //     <Segment>
                          //       Recommended Items
                          //     </Segment>
                          //   </Grid.Column>
                          // </Grid.Row>
