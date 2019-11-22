import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import ChampionTile from './ChampionTile';

const TraitTile = (props) => {
  const pathToTraitIcon = require.context('../../../assets/images/traits', true);

  props.champions.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
  let champions = props.champions.map(champion => {
    return (
      <ChampionTile
        key={champion.id}
        id={champion.id}
        championKey={champion.key}
        seasonId={champion.season.id}
        cost={champion.cost}
        handleChampionClick={props.handleChampionClick}
      />
    )
  });

  let upgrades = props.upgrades.map(upgrade => { return (<div id='ChampionTraits-trait-upgrade'><span id='ChampionTraits-trait-upgrade-number'>{upgrade.threshhold}</span> {upgrade.description}</div>) })

  return [
    <Responsive maxWidth={1023} key='mobile'>
      <div id='ChampionTraitsMobile-trait-container'>
        <div id='ChampionTraitsMobile-trait-header-container'>
          <img id='ChampionTraitsMobile-trait-image' src={`${pathToTraitIcon(`./${props.traitKey}_${props.seasonId}`, true)}`} alt={`{props.name}`} />
          <span id='ChampionTraitsMobile-trait-title'>{props.name}</span>
        </div>
        <div id='ChampionTraitsMobile-description-container'>{props.description}</div>
          {props.upgrades.length !== 0 ? (
            <div id='ChampionTraitsMobile-upgrades-container'>
              <div id='ChampionTraitsMobile-upgrades'>{upgrades}</div>
            </div>
          ) : (
            <span></span>
          )}
        <div id='ChampionTraitsMobile-champions-list'>
          {champions}
        </div>
      </div>
    </Responsive>,

    <Responsive minWidth={1024} key='desktop'>
      <div id='ChampionTraitsDesktop-trait-container'>
        <div id='ChampionTraitsDesktop-trait-header-container'>
          <img id='ChampionTraitsDesktop-trait-image' src={`${pathToTraitIcon(`./${props.traitKey}_${props.seasonId}`, true)}`} alt={`{props.name}`} />
          <span id='ChampionTraitsDesktop-trait-title'>{props.name}</span>
        </div>

        <div id='ChampionTraitsDesktop-trait-details-container'>
          <div id='ChampionTraitsDesktop-details-description-container'>{props.description}</div>

          {props.upgrades.length !== 0 ? (
            <div id='ChampionTraitsDesktop-details-upgrades-container'>
              <div id='ChampionTraitsDesktop-upgrades'>{upgrades}</div>
            </div>
          ) : (
            <span></span>
          )}

          <div id='ChampionTraitsDesktop-details-champions-list'>
            {champions}
          </div>
        </div>

      </div>
    </Responsive>
  ];
}

export default TraitTile;
