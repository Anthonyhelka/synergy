import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Popup, Grid, Header, Table, Responsive, Image } from 'semantic-ui-react';

class ChampionsOverviewTile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, key){
    browserHistory.push(`/champions/${key}`);
  }

  render(){
    const championFileName = `./${this.props.champion.key}`;
    const pathToIcon = require.context('../../../../../public/icons', true);
    const pathToTraitIcon = require.context('../../../../../public/traits', true);

    let synergies = this.props.champion.traits.map(trait => {
      return (
        <Popup on='click' key={trait.id} inverted={true} wide position='top center' hideOnScroll={true} basic={true} trigger={<Image key={trait.id} src={`${pathToTraitIcon(`./${trait.key}`, true)}`} avatar />} >
          <Grid textAlign='center'>
            <Grid.Row>
              <Header>
                <Image src={`${pathToTraitIcon(`./${trait.key}`, true)}`} alt={`${trait.name}`} avatar verticalAlign='middle' />
              </Header>
            </Grid.Row>
            <Grid.Row>
              <span id='synergy-popup-description'>{trait.description}</span>
            </Grid.Row>
          </Grid>
        </Popup>
      )
    });

    return (
      <Table.Row>
        <Responsive as={Table.Cell} maxWidth={500} textAlign='center' onClick={event => this.handleClick(event, this.props.champion.key)}><img id='image-mobile' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} /><br /><span id='search-title'>{this.props.champion.name}</span></Responsive>
        <Responsive as={Table.Cell} minWidth={501} maxWidth={1249} onClick={event => this.handleClick(event, this.props.champion.key)}><img id='image-tablet-computer' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} /><span id='search-title'>&nbsp;&nbsp;{this.props.champion.name}</span></Responsive>
        <Responsive as={Table.Cell} minWidth={1250} onClick={event => this.handleClick(event, this.props.champion.key)}><img id='image-large-computer' src={`${pathToIcon(`./${this.props.champion.key}`, true)}`} /><span id='search-title'>&nbsp;&nbsp;{this.props.champion.name}</span></Responsive>

        <Responsive as={Table.Cell} maxWidth={500} textAlign='center'>{synergies}</Responsive>
        <Responsive as={Table.Cell} minWidth={501}>{synergies}</Responsive>

        <Table.Cell collapsing>{this.props.champion.cost}</Table.Cell>
        <Table.Cell>{this.props.champion.ability.description}</Table.Cell>
      </Table.Row>
    );
  }
}

export default ChampionsOverviewTile;
