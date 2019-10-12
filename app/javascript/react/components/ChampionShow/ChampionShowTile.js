import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, Popup, Grid, Header, Segment, Divider, Responsive, Image } from 'semantic-ui-react';

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

    // let synergiesIconList = this.props.champion.teams.map(synergy => {
    //   return (<List.Item key={synergy.id}><Image src={`${pathToSynergyIcon(synergy.icon, true)}`} avatar /></List.Item>)
    // });

    // let synergiesChampionList = this.props.champion.teams.map(synergy => {
    //   let synergyChampions = synergy.champions.filter(champion => {
    //     if (champion.name === this.props.champion.name) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(champion => {
    //     return (<List.Item key={champion.name} onClick={event => this.handleClick(event, `${champion.name}`)}><Image src={`${pathToIcon(champion.icon, true)}`} size='mini'/></List.Item>)
    //   });
    //
    //   return (
    //     <Segment textAlign='center' inverted>
    //       <Header><Image src={`${pathToSynergyIcon(synergy.icon, true)}`}/><br />{synergy.name}</Header>
    //       <Header.Subheader id='show-page-synergy-description'>{synergy.description}</Header.Subheader>
    //       <Divider />
    //       <List horizontal>
    //         {synergyChampions}
    //       </List>
    //     </Segment>
    //   )
    // });

    return (
      <div>
        <Segment id='champion-show-page-background' raised>
        </Segment>
        <Segment id='champion-show-page-cover' raised>
        </Segment>

          <Segment id='champion-show-page-container' basic raised>

          <Segment id='champion-show-page-left-column' basic>
            <Segment id='champion-show-page-header'>
              <Image id='champion-show-page-header-image' src={`${pathToIcon(this.props.champion.icon, true)}`}  />
              <div id='champion-show-page-header-title'>
                <span>&nbsp;Akali</span>
                <br />
                <span><i>&nbsp;The Rogue Assassin</i></span>
              </div>
            </Segment>
            <Segment id='champion-show-page-render'>
              <Image id='champion-show-page-render-image' src={`${pathToRender(this.props.champion.icon, true)}`}  />
            </Segment>
          </Segment>

          <Segment id='champion-show-page-right-column'>
          </Segment>

        </Segment>
      </div>
    );
  }
}

export default ChampionShowTile;

//   <Responsive maxWidth={1023}>
//     <Segment>
//       <Segment textAlign='center' fluid>
//         <Header><Image src={`${pathToIcon(this.props.champion.icon, true)}`}/><br />{this.props.champion.name}</Header>
//         <List horizontal>{synergiesIconList}</List>
//       </Segment>
//       <Segment textAlign='center' fluid>
//         <Header><Image id='show-page-ability-icon' src={`${pathToAbility(this.props.champion.icon, true)}`}/><br />{this.props.champion.ability_name}</Header>
//         <Header.Subheader id='show-page-ability-description'>{this.props.champion.ability_description}</Header.Subheader>
//         <i>{this.props.champion.mana_cost} Mana</i>
//       </Segment>
//       <Header textAlign='center'>Statistics</Header>
//       <Segment id='champion-show-container' fluid>
//         <Grid centered>
//           <Grid.Row><b>Cost:</b>&nbsp;&nbsp;{this.props.champion.tier}</Grid.Row>
//           <Grid.Row><b>Health:</b>&nbsp;&nbsp;{this.props.champion.health[0]}/{this.props.champion.health[1]}/{this.props.champion.health[2]}</Grid.Row>
//           <Grid.Row><b>Attack Damage:</b>&nbsp;&nbsp;{this.props.champion.attack_damage}</Grid.Row>
//           <Grid.Row><b>Attack Speed:</b>&nbsp;&nbsp;{this.props.champion.attack_speed}</Grid.Row>
//           <Grid.Row><b>Range:</b>&nbsp;&nbsp;{this.props.champion.attack_range}</Grid.Row>
//           <Grid.Row><b>Armor:</b>&nbsp;&nbsp;{this.props.champion.armor}</Grid.Row>
//           <Grid.Row><b>Magic Resist:</b>&nbsp;&nbsp;{this.props.champion.magic_resist}</Grid.Row>
//           <Grid.Row><b>Player Damage:</b>&nbsp;&nbsp;{this.props.champion.player_damage[0]}/{this.props.champion.player_damage[1]}/{this.props.champion.player_damage[2]}</Grid.Row>
//         </Grid>
//       </Segment>
//       <Header textAlign='center'>Synergies</Header>
//       {synergiesChampionList}
//     </Segment>
//   </Responsive>
