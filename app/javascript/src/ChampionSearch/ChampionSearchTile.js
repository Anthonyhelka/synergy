import React from 'react';

const ChampionSearchTile = (props) => {

  const pathToIcon = require.context('../../../assets/images/icons', true);
  
  return (
    <div id='ChampionSearch-champions-item-container'>
      <div id='ChampionSearch-champions-item-label' className={`tier-${props.cost}`}>{props.cost}</div>
      <img id='ChampionSearch-champions-item-image' className={`tier-${props.cost}`} onClick={event => props.handleChampionClick(event, `${props.championKey}`)} src={`${pathToIcon(`./${props.championKey}_${props.seasonId}`, true)}`} alt={props.name} />
    </div>
  );
}

export default ChampionSearchTile;
