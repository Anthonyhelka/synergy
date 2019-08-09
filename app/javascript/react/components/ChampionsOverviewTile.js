import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Popup, Grid, Header, Table, Responsive, Image } from 'semantic-ui-react';

class ChampionsOverviewTile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, name){
    browserHistory.push(`/champions/${name}`);
  }

  render(){
    const pathToIcon = require.context('../../../../public/icons', true);
    const pathToSynergyIcon = require.context('../../../../public/synergies', true);

    let synergies = this.props.champion.teams.map(synergy => {
      return (
        <Popup on='click' key={synergy.id} inverted={true} wide position='top center' hideOnScroll={true} basic={true} trigger={<Image key={synergy.id} src={`${pathToSynergyIcon(synergy.icon, true)}`} avatar />} >
          <Grid textAlign='center'>
            <Grid.Row>
              <Header>
                <Image src={`${pathToSynergyIcon(synergy.icon , true)}`} alt={`${synergy.name}`} avatar verticalAlign='middle' />
              </Header>
            </Grid.Row>
            <Grid.Row>
              <span id='synergy-popup-description'>{synergy.desciption}</span>
            </Grid.Row>
          </Grid>
        </Popup>
      )
    });

    return (
      <Table.Row>
        <Responsive as={Table.Cell} maxWidth={500} textAlign='center' onClick={event => this.handleClick(event, this.props.champion.name)}><img id='image-mobile' src={`${pathToIcon(this.props.champion.icon , true)}`} /><br /><span id='search-title'>{this.props.champion.name}</span></Responsive>
        <Responsive as={Table.Cell} minWidth={501} maxWidth={1249} onClick={event => this.handleClick(event, this.props.champion.name)}><img id='image-tablet-computer' src={`${pathToIcon(this.props.champion.icon , true)}`} /><span id='search-title'>&nbsp;&nbsp;{this.props.champion.name}</span></Responsive>
        <Responsive as={Table.Cell} minWidth={1250} onClick={event => this.handleClick(event, this.props.champion.name)}><img id='image-large-computer' src={`${pathToIcon(this.props.champion.icon , true)}`} /><span id='search-title'>&nbsp;&nbsp;{this.props.champion.name}</span></Responsive>

        <Responsive as={Table.Cell} maxWidth={500} textAlign='center'>{synergies}</Responsive>
        <Responsive as={Table.Cell} minWidth={501}>{synergies}</Responsive>

        <Table.Cell collapsing>{this.props.champion.tier}</Table.Cell>
        <Table.Cell>{this.props.champion.ability_description}</Table.Cell>
      </Table.Row>
    );
  }
}

export default ChampionsOverviewTile;
