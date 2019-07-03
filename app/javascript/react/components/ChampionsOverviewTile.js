import React, { Component } from 'react';
import { Table, Image } from 'semantic-ui-react';

class ChampionsOverviewTile extends Component {
  constructor(props) {
  super(props);
  }

  render(){
    const pathToIcon = require.context('../../../../public/champions', true);
    
    return (
      <Table.Row>
        <Table.Cell><Image src={`${pathToIcon(this.props.champion.icon , true)}`} alt={`${this.props.champion.name}`} avatar /> {this.props.champion.name}</Table.Cell>
        <Table.Cell>{this.props.champion.origin_1} {this.props.champion.origin_2} {this.props.champion.character_class_1} {this.props.champion.character_class_2}</Table.Cell>
        <Table.Cell collapsing>{this.props.champion.tier}</Table.Cell>
        <Table.Cell>{this.props.champion.ability_description}</Table.Cell>
      </Table.Row>
    );
  }
}

export default ChampionsOverviewTile;
