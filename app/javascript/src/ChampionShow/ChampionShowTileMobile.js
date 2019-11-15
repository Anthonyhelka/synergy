import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon, Table } from 'semantic-ui-react';

import ChampionSearch from '../Components/ChampionSearch';

class ChampionShowTileMobile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, key) {
    browserHistory.push(`/champions/${key}`);
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

    let abilityUpgradeList = this.props.champion.ability.stats.map(stat => {
      return (
        <p>{stat.type}: {stat.value}</p>
      )
    });

    let traits = this.props.champion.traits.map(trait => {
      let upgrades = trait.upgrades.map(upgrade => {
        return (
          <List.Item id='ChampionShowMobile-champion-traits-grid-row-column-two-upgrade-list-item'><span id='ChampionShowMobile-champion-traits-grid-row-column-two-upgrade-list-item-upgrade-number'>{upgrade.threshhold}</span> {upgrade.description}</List.Item>
        )
      })
      let sortedChampions = trait.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      let champions = sortedChampions.map(champion => {
        return (
          <List.Item key={champion.id} onClick={event => this.handleClick(event, `${champion.key}`)}>
            <div id='ChampionShowMobile-champion-traits-grid-row-column-two-champion-list-item-container'>
              <div id='ChampionShowMobile-champion-traits-grid-row-column-two-champion-list-item-label' className={`tier-${champion.cost}`}>{champion.cost}</div>
              <Image id='ChampionShowMobile-champion-traits-grid-row-column-two-champion-list-item-image' className={`tier-${champion.cost}`} onClick={event => this.handleClick(event, `${champion.key}`)} src={`${pathToIcon(`./${champion.key}`, true)}`} />
            </div>
          </List.Item>
        );
      });
      return (
        <Grid.Row id='ChampionShowMobile-champion-traits-grid-row' columns='2'>
          <Grid.Column id='ChampionShowMobile-champion-traits-grid-row-column-one' width='16'>
            <Image id='ChampionShowMobile-champion-traits-grid-row-column-one-image'src={`${pathToTraitIcon(`./${trait.key}`, true)}`}/>
            <p>{trait.name}</p>
          </Grid.Column>
          <Grid.Column id='ChampionShowMobile-champion-traits-grid-row-column-two' width='16'>
            <Segment id='ChampionShowMobile-champion-traits-grid-row-column-two-champion-list-container' basic>
              <List id='ChampionShowMobile-champion-traits-grid-row-column-two-champion-list'>
                {champions}
              </List>
            </Segment>
            <Segment id='ChampionShowMobile-champion-traits-grid-row-column-two-description-container' basic>
              <span>{trait.description}</span>
            </Segment>
            {trait.upgrades.length !== 0 ? (
              <Segment id='ChampionShowMobile-champion-traits-grid-row-column-two-upgrade-list-container' basic>
                <List id='ChampionShowMobile-champion-traits-grid-row-column-two-upgrade-list'>
                  {upgrades}
                </List>
              </Segment> ) : (<span></span>)
            }
          </Grid.Column>
        </Grid.Row>
      )
    });

    return (
      <div>
        <Responsive maxWidth={1023}>
          <Segment id='ChampionShowMobile-page-container' basic>
            <Segment id='ChampionShowMobile-search-container' basic>
              <ChampionSearch />
            </Segment>

            <Segment id='ChampionShowMobile-champion-container' basic>
              <Segment id='ChampionShowMobile-champion-header-container' basic>
                <Image id='ChampionShowMobile-champion-header-image' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`}  />
                <div id='ChampionShowMobile-champion-header-title-container'>
                  <span id='ChampionShowMobile-champion-header-title-name'>{this.props.champion.name}</span>
                  <br />
                  <span id='ChampionShowMobile-champion-header-title-title'>{this.props.champion.title}</span>
                </div>
                <div id='ChampionShowMobile-champion-header-tier-container'>
                  <Popup on='click' key='cost' position='top center' hideOnScroll={true} trigger={<div id='ChampionShowMobile-champion-header-tier' className={`tier-${this.props.champion.cost}`}><span>{this.props.champion.cost}</span></div>}>Cost</Popup>
                </div>
              </Segment>

              <Segment id='ChampionShowMobile-champion-statistics-container' basic>
                <List id='ChampionShowMobile-champion-statistics-list' horizontal>
                    <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                      <Popup on='click' key='health' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/health.png')} />}>Health</Popup>
                      <span>{this.props.champion.stats.defense.health}</span>
                    </List.Item>
                  <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                    <Popup on='click' key='armor' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/armor.png')} />}>Armor</Popup>
                    <span>{this.props.champion.stats.defense.armor}</span>
                  </List.Item>
                  <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                    <Popup on='click' key='magic_resist' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/magic_resist.png')} />}>Magic Resist</Popup>
                    <span>{this.props.champion.stats.defense.magic_resist}</span>
                  </List.Item>
                  <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                    <Popup on='click' key='attack_damage' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/attack_damage.png')} />}>Attack Damage</Popup>
                    <span>{this.props.champion.stats.offense.damage}</span>
                  </List.Item>
                  <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                    <Popup on='click' key='attack_speed' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/attack_speed.png')} />}>Attack Speed</Popup>
                    <span>{this.props.champion.stats.offense.attack_speed}</span>
                  </List.Item>
                  <List.Item id='ChampionShowMobile-champion-statistics-list-item-container'>
                    <Popup on='click' key='range' position='top center' hideOnScroll={true} trigger={<Image id='ChampionShowMobile-champion-statistics-list-item-image' src={require('../../../assets/images/stat_icons/range.png')} />}>Range</Popup>
                    <span>{this.props.champion.stats.offense.range}</span>
                  </List.Item>
                </List>
              </Segment>


              <Segment id='ChampionShowMobile-champion-ability-container' basic>
                <Grid id='ChampionShowMobile-champion-ability-grid'>
                  <Grid.Row id='ChampionShowMobile-champion-ability-grid-row-one'>
                    <Grid.Column id='ChampionShowMobile-champion-ability-grid-row-one-column-one' width='10'>
                        <span>{this.props.champion.ability.name}</span>
                    </Grid.Column>
                    <Grid.Column id='ChampionShowMobile-champion-ability-grid-row-one-column-two' width='6'>
                        <span>{this.props.champion.ability.type}</span>
                        <Popup on='click' key='mana' position='right' hideOnScroll={true} trigger={<span><Icon name='tint' />{this.props.champion.ability.mana_start} / {this.props.champion.ability.mana_cost}</span>}>Mana</Popup>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id='ChampionShowMobile-champion-ability-grid-row-two'>
                    <Grid.Column id='ChampionShowMobile-champion-ability-grid-row-two-column-one' width='3'>
                      <Image id='ChampionShowMobile-champion-ability-grid-row-two-column-one-image' src={`${pathToAbility(`./${this.props.champion.key}`, true)}`}  />
                    </Grid.Column>
                    <Grid.Column id='ChampionShowMobile-champion-ability-grid-row-two-column-two' width='13'>
                      <span id='ChampionShowMobile-champion-ability-grid-row-two-column-two-description'>{this.props.champion.ability.description}</span>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id='ChampionShowMobile-champion-ability-grid-row-three'>
                    <Grid.Column id='ChampionShowMobile-champion-ability-grid-row-three-column-one' width='16'>
                      <Segment id='ChampionShowMobile-champion-ability-grid-row-three-column-one-upgrades-container' basic>
                        {abilityUpgradeList}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

              <Segment id='ChampionShowMobile-champion-render-container' basic>
                <Image id='ChampionShowMobile-champion-render-image' src={`${pathToRender(`./${this.props.champion.key}`, true)}`}  />
              </Segment>

            </Segment>

            <Segment id='ChampionShowMobile-champion-traits-container' basic>
              <Grid id='ChampionShowMobile-champion-traits-grid'>
                {traits}
              </Grid>
            </Segment>

          </Segment>
        </Responsive>
      </div>
    );
  }
}

export default ChampionShowTileMobile;
