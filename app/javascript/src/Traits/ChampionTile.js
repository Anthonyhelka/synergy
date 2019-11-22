import React, { Component } from 'react';

const ChampionTile = (props) => {
  const pathToIcon = require.context('../../../assets/images/icons', true);

  return (
    <div id='ChampionTraits-champion-list-item' onClick={event => props.handleChampionClick(event, `${props.championKey}`)}>
      <div id='ChampionTraits-champion-list-item-label' className={`tier-${props.cost}`}>{props.cost}</div>
      <img id='ChampionTraits-champion-list-item-image' className={`tier-${props.cost}`} src={`${pathToIcon(`./${props.championKey}_${props.seasonId}`, true)}`} />
    </div>
  );
}

export default ChampionTile;
