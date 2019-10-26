import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon, Table } from 'semantic-ui-react';

import ChampionSearch from '../Components/ChampionSearch';

class ChampionShowTileMobile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
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

    let traitsIconList = this.props.champion.traits.map(trait => {
      return (
        <div id='champion-header-trait-mobile'>
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

    let traits = this.props.champion.traits.map(trait => {
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
              <Image id='champion-show-icon-mobile' className={`tier-${champion.cost}`} onClick={event => this.handleClick(event, `${champion.key}`)} src={`${pathToIcon(`./${champion.key}`, true)}`} />
            </div>
          </List.Item>
        );
      });
      return (
        <Grid.Row id='trait-row-mobile' columns='2'>
            <Grid.Column id='trait-header-column' width='16'>
              <Segment id='trait-header-container-mobile' basic>
                <Image src={`${pathToTraitIcon(`./${trait.key}`, true)}`}/>
                <p>{trait.name}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column id='trait-details-column' width='16'>
              <Grid.Row>
                <Segment id='trait-details-column-champions' basic>
                  <List id='trait-champions-list-mobile'>
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
        <Segment id='champion-container-mobile' basic>
            <Grid id='champion-container-grid-mobile'>
              <Grid.Row id='champion-header-row-mobile' columns='1'>
                <Grid.Column id='champion-header-image-mobile' width='4'>
                  <Image src={`${pathToIcon(`./${this.props.champion.key}`, true)}`}  />
                </Grid.Column>
                <Grid.Column id='champion-header-title-mobile' width='8'>
                  <span>{this.props.champion.name}</span>
                  <br />
                  <span>{this.props.champion.title}</span>
                </Grid.Column>
                <Segment id='champion-header-slanted-div-mobile' basic>
                  <Popup on='click' key='cost' position='top center' hideOnScroll={true} trigger={<div id='champion-header-tier-mobile' className={`tier-${this.props.champion.cost}`}><span>{this.props.champion.cost}</span></div>}>Cost</Popup>
                </Segment>
              </Grid.Row>
              <Grid.Row id='champion-statistics-row-mobile' columns='1'>
                <Grid.Column id='champion-statistics-container-mobile' width='16'>
                  <List id='champion-statistics-list-mobile' horizontal>
                      <List.Item id='champion-statistic-list-item-mobile'>
                        <Popup on='click' key='health' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/health.png')} />}>Health</Popup>
                        {this.props.champion.stats.defense.health}
                      </List.Item>
                    <List.Item id='champion-statistic-list-item-mobile'>
                      <Popup on='click' key='armor' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/armor.png')} />}>Armor</Popup>
                      {this.props.champion.stats.defense.armor}
                    </List.Item>
                    <List.Item id='champion-statistic-list-item-mobile'>
                      <Popup on='click' key='magic_resist' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/magic_resist.png')} />}>Magic Resist</Popup>
                      {this.props.champion.stats.defense.magic_resist}
                    </List.Item>
                    <List.Item id='champion-statistic-list-item-mobile'>
                      <Popup on='click' key='attack_damage' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_damage.png')} />}>Attack Damage</Popup>
                      {this.props.champion.stats.offense.damage}
                    </List.Item>
                    <List.Item id='champion-statistic-list-item-mobile'>
                      <Popup on='click' key='attack_speed' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_speed.png')} />}>Attack Speed</Popup>
                      {this.props.champion.stats.offense.attack_speed}
                    </List.Item>
                    <List.Item id='champion-statistic-list-item-mobile'>
                      <Popup on='click' key='range' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/range.png')} />}>Range</Popup>
                      {this.props.champion.stats.offense.range}
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row id='champion-ability-row-mobile' columns='1'>
                <Grid.Column id='champion-ability-column' width='16'>
                  <Grid id='champion-ability-grid-mobile'>
                    <Grid.Row id='champion-ability-row-one-mobile'>
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
                          <Popup on='click' key='mana' position='right' hideOnScroll={true} trigger={<span><Icon name='tint' />{this.props.champion.ability.mana_start} / {this.props.champion.ability.mana_cost}</span>}>Mana</Popup>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='champion-ability-row-two-mobile'>
                      <Grid.Column id='champion-ability-image-container' width='4' stretched>
                        <Segment id='champion-ability-image-mobile' inverted basic>
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
              <Grid.Row id='champion-render-row-mobile' columns='1'>
                <Grid.Column id='champion-render-container'>
                  <Segment id='champion-render' basic fluid>
                    <Image src={`${pathToRender(`./${this.props.champion.key}`, true)}`}  />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Grid>
                    {traits}
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment id='champion-search-container-container-mobile' basic>
            <ChampionSearch />
          </Segment>
      </div>
    );
  }
}

export default ChampionShowTileMobile;
