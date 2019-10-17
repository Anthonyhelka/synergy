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
    const pathToAbility = require.context('../../../../../public/abilities', true);
    const pathToRender = require.context('../../../../../public/renders', true);
    const pathToSynergyIcon = require.context('../../../../../public/synergies', true);
    const pathToStylingImages = require.context('../../../../../public/styling-images', true);

    let synergiesIconList = this.props.champion.teams.map(synergy => {
      return (
        <div id='champion-header-synergy'>
          <Image src={`${pathToSynergyIcon(synergy.icon, true)}`}  />
          <span>&nbsp;{synergy.name}</span>
        </div>
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
                    <Label id='champion-header-tier' className={`${this.props.champion.tier_color}-tier`} attached='top left'><Icon fitted name='dollar sign' />&nbsp;{this.props.champion.tier}</Label>
                    <div id='champion-header-title'><span>{this.props.champion.name}</span><p>The Rogue Assassin</p></div>
                    <Image id='champion-header-image' src={`https://cdn.lolchess.gg/images/lol/champion-splash-modified/${this.props.champion.name}.jpg`} />
                    <div id='champion-header-synergies-container'>
                      {synergiesIconList}
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row id='champion-row-two' columns='2'>
                <Grid.Column width='5'>
                  <Segment>
                    <Grid.Row columns='2'>

                      <Grid.Column>
                        <Grid stackable>
                          <Grid.Row id='champion-ability-container' width='16'>
                            <Grid.Column id='champion-ability-title-container' width='12'>
                              <Segment id='champion-ability-title-container'>
                                <span>{this.props.champion.ability_name}</span>
                              </Segment>
                            </Grid.Column>
                            <Grid.Column id='champion-ability-type-mana-container' width='4'>
                              <Segment id='champion-ability-type-container'>
                                <span>{this.props.champion.ability_type}</span>
                              </Segment>
                              <Segment id='champion-ability-mana-container'>
                                <span>{this.props.champion.starting_mana} / {this.props.champion.mana_cost}</span>
                              </Segment>
                            </Grid.Column>

                            <Grid.Column id='champion-ability-image-description-container' width='12'>
                              <Segment id='champion-ability-image-container'>
                                <Image className='champion-page-champion-ability-image' src={`${pathToAbility(this.props.champion.icon, true)}`}  />
                              </Segment>
                            </Grid.Column>
                            <Grid.Column id='champion-ability-description-container' width='4'>
                              <Segment id='champion-ability-type-container'>
                                <span>{this.props.champion.ability_description}</span>
                              </Segment>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Grid.Column>
                      <Grid.Column>
                        <Segment>
                          Render
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
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

              <Grid.Row id='champion-row-three' columns='1'>
                <Grid.Column>
                  <Segment>
                    Recommended Items
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

// <Divider className='champion-page-champion-ability-divider' />
// <Divider className='champion-page-champion-ability-divider' />
// <span>{this.props.champion.ability_type}</span>
// <span>{this.props.champion.ability_description}</span>
// <span>{this.props.champion.starting_mana}/{this.props.champion.mana_cost}</span>



                          // <Divider id='champion-ability-divider' />
                          //
                          // <Segment id='champion-ability-image-container' basic>
                          //   <Image src={`${pathToAbility(this.props.champion.icon, true)}`}  />
                          // </Segment>

                          // <Segment id='champion-page-champion-render'>
                          //   <Image className='champion-page-champion-render-image' src={`${pathToRender(this.props.champion.icon, true)}`}  />
                          // </Segment>



// <Segment id='champion-page-container'>
//
//   <Segment id='champion-page-search-container'>
//   </Segment>
//
//
//
//   <Segment id='champion-page-champion-container'>
    // <Segment className={`champion-page-champion-header ${this.props.champion.tier_color}-tier`}>
    //   <Label className={`champion-page-champion-header-label ${this.props.champion.tier_color}-tier`} attached='top left'><Icon fitted name='dollar sign' />&nbsp;{this.props.champion.tier}</Label>
    //   <div id='champion-page-champion-header-title'>
    //     <span>{this.props.champion.name}</span>
    //     <br />
    //     <i>The Rogue Assassin</i>
    //   </div>
    //   <Image id='champion-page-champion-header-image' src={`https://cdn.lolchess.gg/images/lol/champion-splash-modified/${this.props.champion.name}.jpg`} />
    //   <div className='champion-page-champion-header-synergies-container'>
    //     {synergiesIconList}
    //   </div>
    // </Segment>
// </Segment>
