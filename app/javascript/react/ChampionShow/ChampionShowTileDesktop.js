import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image, Label, Icon, Table } from 'semantic-ui-react';

import ChampionSearch from '../Components/ChampionSearch';

class ChampionShowTileDesktop extends Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    const pathToIcon = require.context('../../../assets/images/icons', true);
    const pathToBanner = require.context('../../../assets/images/banners', true);
    const pathToAbility = require.context('../../../assets/images/abilities', true);
    const pathToRender = require.context('../../../assets/images/renders', true);
    const pathToTraitIcon = require.context('../../../assets/images/traits', true);

    let traitsIconList = this.props.champion.traits.map(trait => {
      return (
        <div id='ChampionShowDesktop-champion-header-trait'>
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
          <List.Item id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-upgrades-list-item'><span id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-upgrades-list-item-upgrade-number'>{upgrade.threshhold}</span> {upgrade.description}</List.Item>
        )
      })
      let sortedChampions = trait.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      let champions = sortedChampions.map(champion => {
        return (
          <List.Item key={champion.id} onClick={event => this.handleClick(event, `${champion.key}`)}>
            <div id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-container'>
              <div id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-label' className={`tier-${champion.cost}`}>{champion.cost}</div>
              <Image id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-image' className={`tier-${champion.cost}`} onClick={event => this.handleClick(event, `${champion.key}`)} src={`${pathToIcon(`./${champion.key}`, true)}`} />
            </div>
          </List.Item>
        );
      });
      return (
        <Grid.Row id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one' columns='2'>
            <Grid.Column id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-one' width='2'>
              <Image id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-one-image' src={`${pathToTraitIcon(`./${trait.key}`, true)}`}/>
              <p>{trait.name}</p>
            </Grid.Column>
            <Grid.Column id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two' width='14'>
              <Segment id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-champions' basic>
                <List id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-champions-list' horizontal>
                  {champions}
                </List>
              </Segment>
              <Segment id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-description' basic>
                <span>{trait.description}</span>
              </Segment>
              {trait.upgrades.length !== 0 ? (
                <Segment id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-upgrades-container' basic>
                  <List id='ChampionShowDesktop-champion-details-traits-traits-grid-row-one-column-two-upgrades-listt'>{upgrades}</List>
                </Segment> ) : (<span></span>)
              }
            </Grid.Column>
        </Grid.Row>
      )
    });

    return (
      <div>
        <Responsive minWidth={1024}>
          <Segment id='ChampionShowDesktop-page-container' basic>
            <Segment id='ChampionShowDesktop-search-container' basic>
              <ChampionSearch />
            </Segment>
            <Segment id='ChampionShowDesktop-champion-container' basic>
              <Segment id='ChampionShowDesktop-champion-header' basic>
                <Popup on='click' key='cost' position='top center' hideOnScroll={true} trigger={<Label id='ChampionShowDesktop-champion-header-tier' className={`tier-${this.props.champion.cost}`} attached='top left'>{this.props.champion.cost}</Label>}>Cost</Popup>
                  <div id='ChampionShowDesktop-champion-header-title'><span>{this.props.champion.name}</span><p>{this.props.champion.title}</p></div>
                  <Image id='ChampionShowDesktop-champion-header-image' src={`${pathToBanner(`./${this.props.champion.key}`, true)}`} />
                  <div id='ChampionShowDesktop-champion-header-traits-container'>
                    {traitsIconList}
                  </div>
              </Segment>
              <Segment id='ChampionShowDesktop-champion-details' basic>
                <Segment id='ChampionShowDesktop-champion-details-ability-container' basic>
                  <Grid id='ChampionShowDesktop-champion-details-ability-grid'>
                    <Grid.Row id='ChampionShowDesktop-champion-details-ability-grid-row-one'>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-one-column-one' width='10'>
                        <span id='ChampionShowDesktop-champion-details-ability-grid-row-one-column-one-title'>{this.props.champion.ability.name}</span>
                      </Grid.Column>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-one-column-two' width='6'>
                        <span id='ChampionShowDesktop-champion-details-ability-grid-row-one-column-two-type'>{this.props.champion.ability.type}</span>
                        <Popup on='click' key='mana' position='right' hideOnScroll={true} trigger={<span id='ChampionShowDesktop-champion-details-ability-grid-row-one-column-two-mana'><Icon name='tint' />{this.props.champion.ability.mana_start} / {this.props.champion.ability.mana_cost}</span>}>Mana</Popup>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShowDesktop-champion-details-ability-grid-row-two'>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-two-column-one' width='4'>
                        <Image id='ChampionShowDesktop-champion-details-ability-grid-row-two-column-one-image' src={`${pathToAbility(`./${this.props.champion.key}`, true)}`}  />
                      </Grid.Column>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-two-column-two' width='12'>
                        <span id='ChampionShowDesktop-champion-details-ability-grid-row-two-column-two-description'>{this.props.champion.ability.description}</span>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShowDesktop-champion-details-ability-grid-row-three'>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-three-column-one' width='16'>
                        <Segment id='ChampionShowDesktop-champion-details-ability-grid-row-three-column-one-stats' basic>{abilityUpgradeList}</Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShowDesktop-champion-details-ability-grid-row-four'>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-four-column-one'>
                        <Image id='ChampionShowDesktop-champion-details-ability-grid-row-four-column-one-image' src={`${pathToRender(`./${this.props.champion.key}`, true)}`}  />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShowDesktop-champion-details-ability-grid-row-five'>
                      <Grid.Column id='ChampionShowDesktop-champion-details-ability-grid-row-five-column-one'>
                        <Segment id='ChampionShowDesktop-champion-details-ability-grid-row-five-column-one-header' basic>
                          <span>Recommended Items</span>
                        </Segment>
                        <Segment id='ChampionShowDesktop-champion-details-ability-grid-row-five-column-one-items' basic>
                          <span>Coming Soon!</span>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment id='ChampionShowDesktop-champion-details-traits-container' basic>
                  <Segment id='ChampionShowDesktop-champion-details-traits-statistics-container' inverted basic>
                    <List id='ChampionShowDesktop-champion-details-traits-statistics-list' horizontal>
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='health' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/health.png')} />}>Health</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Health</List.Header>
                            {this.props.champion.stats.defense.health}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='armor' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/armor.png')} />}>Armor</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Armor</List.Header>
                            {this.props.champion.stats.defense.armor}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='magic_resist' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/magic_resist.png')} />}>Magic Resist</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Magic Resist</List.Header>
                            {this.props.champion.stats.defense.magic_resist}
                          </List.Content>
                      </List.Item>
                      <br />
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='attack_damage' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_damage.png')} />}>Attack Damage</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Attack Damage</List.Header>
                            {this.props.champion.stats.offense.damage}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='attack_speed' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_speed.png')} />}>Attack Speed</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Attack Speed</List.Header>
                            {this.props.champion.stats.offense.attack_speed}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShowDesktop-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='range' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/range.png')} />}>Range</Popup>
                        <List.Content>
                          <List.Header id='ChampionShowDesktop-champion-details-traits-statistics-list-item-header'>Range</List.Header>
                            {this.props.champion.stats.offense.range}
                          </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                  <Segment id='ChampionShowDesktop-champion-details-traits-traits-container' basic>
                    <Grid id='ChampionShowDesktop-champion-details-traits-traits-grid'>
                      {traits}
                    </Grid>
                  </Segment>
                </Segment>
              </Segment>
            </Segment>
          </Segment>
        </Responsive>
      </div>
    );
  }
}

export default ChampionShowTileDesktop;
