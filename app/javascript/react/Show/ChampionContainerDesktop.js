import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon, Table } from 'semantic-ui-react';

import ChampionSearch from '../Components/ChampionSearch';

class ChampionShowTile extends Component {
  constructor(props) {
    super(props);
    this.state={
      update: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.body.classList.add(`grey-background-color`);
  }

  componentWillUnmount() {
    document.body.classList.remove(`grey-background-color`);
  }

  handleClick(event, key) {
    browserHistory.push(`/champions/${key}`);
    window.location.reload();
  }

  render() {
    const pathToIcon = require.context('../../../assets/images/icons', true);
    const pathToBanner = require.context('../../../assets/images/banners', true);
    const pathToAbility = require.context('../../../assets/images/abilities', true);
    const pathToRender = require.context('../../../assets/images/renders', true);
    const pathToTraitIcon = require.context('../../../assets/images/traits', true);

    let synergiesIconList = this.props.champion.traits.map(trait => {
      return (
        <div id='champion-header-trait'>
          <Image src={`${pathToTraitIcon(`./${trait.key}`, true)}`}  />
          <span>&nbsp;{trait.name}</span>
        </div>
      )
    });

    let abilityStatList = this.props.champion.ability.stats.map(stat => {
      return (
        <p>{stat.type}: {stat.value}</p>
      )
    });

    let synergies = this.props.champion.traits.map(trait => {
      let upgrades = trait.upgrades.map(upgrade => {
        return (
          <List.Item id='trait-details-column-stats-list-item'><span id='trait-details-column-stats-upgrade-number'>{upgrade.threshhold}</span> {upgrade.description}</List.Item>
        )
      })
      let traitChampions = trait.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      let champions = traitChampions.map(champion => {
        return (
          <List.Item key={champion.id} onClick={event => this.handleClick(event, `${champion.key}`)}>
            <div id='champion-show-icon-container'>
              <div id='champion-show-icon-label' className={`tier-${champion.cost}`}>{champion.cost}</div>
              <Image id='champion-show-icon' className={`tier-${champion.cost}`} onClick={event => this.handleClick(event, `${champion.key}`)} src={`${pathToIcon(`./${champion.key}`, true)}`} />
            </div>
          </List.Item>
        );
      });
      return (
        <Grid.Row className='trait-row' columns='2'>
            <Grid.Column id='trait-header-column' width='2'>
              <Segment id='trait-header-container' basic>
                <Image src={`${pathToTraitIcon(`./${trait.key}`, true)}`}/>
                <p>{trait.name}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column id='trait-details-column' width='14'>
              <Grid.Row>
                <Segment id='trait-details-column-champions' basic>
                  <List horizontal>
                    {champions}
                  </List>
                </Segment>
              </Grid.Row>
              <Grid.Row>
                <Segment id='trait-details-column-description' basic>
                  <span>{trait.description}</span>
                </Segment>
              </Grid.Row>
              <Grid.Row>
                <Segment id='trait-details-column-stats' basic>
                  <List id='trait-details-column-stats-list'>
                    {upgrades}
                  </List>
                </Segment>
              </Grid.Row>
            </Grid.Column>
        </Grid.Row>
      )
    });

    return (
      <div>
        <Segment id='page-container' basic>

          <Segment id='search-container'>
            <ChampionSearch />
          </Segment>

          <Segment id='champion-container' basic>
            <Grid stackable>

              <Grid.Row id='champion-row-one' columns='1'>
                <Grid.Column>
                  <Segment id='champion-header'>
                    <Label id='champion-header-tier' className={`tier-${this.props.champion.cost}`} attached='top left'>{this.props.champion.cost}</Label>
                    <div id='champion-header-title'><span>{this.props.champion.name}</span><p>{this.props.champion.title}</p></div>
                    <Image id='champion-header-image' src={`${pathToBanner(`./${this.props.champion.key}`, true)}`} />
                    <div id='champion-header-synergies-container'>
                      {synergiesIconList}
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row id='champion-row-two'>
                <Grid.Column id='champion-left-column-container' width='5'>
                  <Segment id='champion-left-column' basic fluid>
                    <Grid id='champion-left-column-grid'>
                      <Grid.Row id='champion-ability-row' columns='1'>

                        <Grid.Column id='champion-ability-column' width='16'>
                          <Grid id='champion-ability-grid'>
                            <Grid.Row id='champion-ability-row-one'>
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
                                <Segment id='champion-ability-image' inverted basic>
                                  <Image src={`${pathToAbility(`./${this.props.champion.key}`, true)}`}  />
                                </Segment>
                              </Grid.Column>
                              <Grid.Column id='champion-ability-description-container' width='12'>
                                <Segment id='champion-ability-description' inverted basic>
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
                          <Segment id='champion-render' basic fluid>
                            <Image src={`${pathToRender(`./${this.props.champion.key}`, true)}`}  />
                          </Segment>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Grid.Column>

                <Grid.Column id='champion-right-column-container' width='11'>
                  <Segment id='champion-right-column' basic>
                    <Grid.Row columns='3'>
                      <Grid.Column>
                        <Segment id='statistics-container' inverted>
                          <List id='statistics-list' horizontal>
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images/stat_icons/health.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Health</List.Header>
                                  {this.props.champion.stats.defense.health}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images/stat_icons/armor.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Armor</List.Header>
                                  {this.props.champion.stats.defense.armor}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images/stat_icons/magic_resist.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Magic Resist</List.Header>
                                  {this.props.champion.stats.defense.magic_resist}
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images/stat_icons/attack_damage.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Attack Damage</List.Header>
                                  {this.props.champion.stats.offense.damage}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images/stat_icons/attack_speed.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Attack Speed</List.Header>
                                  {this.props.champion.stats.offense.attack_speed}
                                </List.Content>
                            </List.Item>
                            <List.Item id='statistic-list-item'>
                              <Image src={require('../../../assets/images//stat_icons/attack_range.png')} />
                              <List.Content>
                                <List.Header id='statistic-list-item-header'>Range</List.Header>
                                  {this.props.champion.stats.offense.range}
                                </List.Content>
                            </List.Item>
                          </List>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column id='right-column-synergies-column'>
                        <Segment id='synergies-container'>
                          <Grid id='synergies-grid'>
                            {synergies}
                          </Grid>
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
