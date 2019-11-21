import React, { Component } from 'react';

const ChampionTableTile = (props) => {

  const pathToIcon = require.context('../../../assets/images/icons', true);
  const pathToTraitIcon = require.context('../../../assets/images/traits', true);

  let traits = props.traits.map(trait => {
    return ( <img id='ChampionOverview-table-champion-row-trait-image' key={trait.id} src={`${pathToTraitIcon(`./${trait.key}_${trait.season.id}`, true)}`} alt={trait.name} /> )
  });

  return (
    <tr id='ChampionOverview-table-champion-row' onClick={event => props.handleChampionClick(event, props.championKey)} >
      <td id='ChampionOverview-table-champion-row-name' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.name !== '' ? '-active' : '')}`}><img id='ChampionOverview-table-champion-row-name-image' src={`${pathToIcon(`./${props.championKey}_${props.seasonId}`, true)}`} />&nbsp;<span id='ChampionOverview-table-champion-row-name-title'>{props.name}</span></td>
      <td id='ChampionOverview-table-champion-row-traits' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.traits !== '' ? '-active' : '')}`}><div id='ChampionOverview-table-champion-row-trait-images-container'>{traits}</div></td>
      <td id='ChampionOverview-table-champion-row-cost' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.cost !== '' ? '-active' : '')}`}>{props.cost}</td>
      <td id='ChampionOverview-table-champion-row-health' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.health !== '' ? '-active' : '')}`}>{props.health[0]}</td>
      <td id='ChampionOverview-table-champion-row-armor' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.armor !== '' ? '-active' : '')}`}>{props.armor}</td>
      <td id='ChampionOverview-table-champion-row-magic-resist' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.magicResist !== '' ? '-active' : '')}`}>{props.magicResist}</td>
      <td id='ChampionOverview-table-champion-row-dps' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.dps !== '' ? '-active' : '')}`}>{Math.ceil(props.attackDamage[0] * props.attackSpeed) * 1}</td>
      <td id='ChampionOverview-table-champion-row-attack-damage' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.attackDamage !== '' ? '-active' : '')}`}>{props.attackDamage[0]}</td>
      <td id='ChampionOverview-table-champion-row-attack-speed' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.attackSpeed !== '' ? '-active' : '')}`}>{props.attackSpeed}</td>
      <td id='ChampionOverview-table-champion-row-range' className={`ChampionOverview-table-champion-row-item${(props.columnStatus.range !== '' ? '-active' : '')}`}>{props.range}</td>
    </tr>
  );
}

export default ChampionTableTile;
