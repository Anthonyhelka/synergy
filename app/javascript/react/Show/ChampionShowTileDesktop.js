import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
        <div id='ChampionShow-champion-header-trait'>
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
          <List.Item id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-upgrades-list-item'><span id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-upgrades-list-item-upgrade-number'>{upgrade.threshhold}</span> {upgrade.description}</List.Item>
        )
      })
      let sortedChampions = trait.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      let champions = sortedChampions.map(champion => {
        return (
          <List.Item key={champion.id} onClick={event => this.handleClick(event, `${champion.key}`)}>
            <div id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-container'>
              <div id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-label' className={`tier-${champion.cost}`}>{champion.cost}</div>
              <Image id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-champions-list-item-image' className={`tier-${champion.cost}`} onClick={event => this.handleClick(event, `${champion.key}`)} src={`${pathToIcon(`./${champion.key}`, true)}`} />
            </div>
          </List.Item>
        );
      });
      return (
        <Grid.Row id='ChampionShow-champion-details-traits-traits-grid-row-one' columns='2'>
            <Grid.Column id='ChampionShow-champion-details-traits-traits-grid-row-one-column-one' width='2'>
              <Image id='ChampionShow-champion-details-traits-traits-grid-row-one-column-one-image' src={`${pathToTraitIcon(`./${trait.key}`, true)}`}/>
              <p>{trait.name}</p>
            </Grid.Column>
            <Grid.Column id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two' width='14'>
              <Segment id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-champions' basic>
                <List id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-champions-list' horizontal>
                  {champions}
                </List>
              </Segment>
              <Segment id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-description' basic>
                <span>{trait.description}</span>
              </Segment>
              <Segment id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-upgrades-container' basic>
                  <List id='ChampionShow-champion-details-traits-traits-grid-row-one-column-two-upgrades-list'>
                    {upgrades}
                  </List>
                </Segment>
            </Grid.Column>
        </Grid.Row>
      )
    });

    return (
      <div>
        <Responsive minWidth={1024}>
          <Segment id='ChampionShow-page-container-desktop'>
            <Segment id='ChampionShow-search-container-desktop'>
              <ChampionSearch />
            </Segment>
            <Segment id='ChampionShow-champion-container-desktop' basic>
              <Segment id='ChampionShow-champion-header-desktop'>
                <Popup on='click' key='cost' position='top center' hideOnScroll={true} trigger={<Label id='ChampionShow-champion-header-tier-desktop' className={`tier-${this.props.champion.cost}`} attached='top left'>{this.props.champion.cost}</Label>}>Cost</Popup>
                  <div id='ChampionShow-champion-header-title'><span>{this.props.champion.name}</span><p>{this.props.champion.title}</p></div>
                  <Image id='ChampionShow-champion-header-image' src={`${pathToBanner(`./${this.props.champion.key}`, true)}`} />
                  <div id='ChampionShow-champion-header-synergies-container'>
                    {synergiesIconList}
                  </div>
              </Segment>
              <Segment id='ChampionShow-champion-details-desktop' basic>
                <Segment id='ChampionShow-champion-details-ability-container-desktop' basic>
                  <Grid id='ChampionShow-champion-details-ability-grid'>
                    <Grid.Row id='ChampionShow-champion-details-ability-grid-row-one'>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-one-column-one' width='10'>
                        <span id='ChampionShow-champion-details-ability-grid-row-one-column-one-title'>{this.props.champion.ability.name}</span>
                      </Grid.Column>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-one-column-two' width='6'>
                        <span id='ChampionShow-champion-details-ability-grid-row-one-column-two-type'>{this.props.champion.ability.type}</span>
                        <Popup on='click' key='mana' position='right' hideOnScroll={true} trigger={<span id='ChampionShow-champion-details-ability-grid-row-one-column-two-mana'><Icon name='tint' />{this.props.champion.ability.mana_start} / {this.props.champion.ability.mana_cost}</span>}>Mana</Popup>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShow-champion-details-ability-grid-row-two'>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-two-column-one' width='4'>
                        <Image id='ChampionShow-champion-details-ability-grid-row-two-column-one-image' src={`${pathToAbility(`./${this.props.champion.key}`, true)}`}  />
                      </Grid.Column>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-two-column-two' width='12'>
                        <span id='ChampionShow-champion-details-ability-grid-row-two-column-two-description'>{this.props.champion.ability.description}</span>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShow-champion-details-ability-grid-row-three'>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-three-column-one' width='16'>
                        <Segment id='ChampionShow-champion-details-ability-grid-row-three-column-one-stats' basic>{abilityStatList}</Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShow-champion-details-ability-grid-row-four'>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-four-column-one'>
                        <Image id='ChampionShow-champion-details-ability-grid-row-four-column-one-image' src={`${pathToRender(`./${this.props.champion.key}`, true)}`}  />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id='ChampionShow-champion-details-ability-grid-row-five'>
                      <Grid.Column id='ChampionShow-champion-details-ability-grid-row-five-column-one'>
                        <Segment id='ChampionShow-champion-details-ability-grid-row-five-column-one-header' basic>
                          <span>Recommended Items</span>
                        </Segment>
                        <Segment id='ChampionShow-champion-details-ability-grid-row-five-column-one-items' basic>
                          <span>Coming Soon!</span>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment id='ChampionShow-champion-details-traits-container-desktop'>
                  <Segment id='ChampionShow-champion-details-traits-statistics-container' inverted basic>
                    <List id='ChampionShow-champion-details-traits-statistics-list' horizontal>
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='health' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/health.png')} />}>Health</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Health</List.Header>
                            {this.props.champion.stats.defense.health}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='armor' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/armor.png')} />}>Armor</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Armor</List.Header>
                            {this.props.champion.stats.defense.armor}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='magic_resist' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/magic_resist.png')} />}>Magic Resist</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Magic Resist</List.Header>
                            {this.props.champion.stats.defense.magic_resist}
                          </List.Content>
                      </List.Item>
                      <br />
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='attack_damage' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_damage.png')} />}>Attack Damage</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Attack Damage</List.Header>
                            {this.props.champion.stats.offense.damage}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='attack_speed' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/attack_speed.png')} />}>Attack Speed</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Attack Speed</List.Header>
                            {this.props.champion.stats.offense.attack_speed}
                          </List.Content>
                      </List.Item>
                      <List.Item id='ChampionShow-champion-details-traits-statistics-list-item'>
                        <Popup on='click' key='range' position='top center' hideOnScroll={true} trigger={<Image src={require('../../../assets/images/stat_icons/range.png')} />}>Range</Popup>
                        <List.Content>
                          <List.Header id='ChampionShow-champion-details-traits-statistics-list-item-header'>Range</List.Header>
                            {this.props.champion.stats.offense.range}
                          </List.Content>
                      </List.Item>
                    </List>
                  </Segment>
                  <Segment id='ChampionShow-champion-details-traits-traits-container' basic>
                    <Grid id='ChampionShow-champion-details-traits-traits-grid'>
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
