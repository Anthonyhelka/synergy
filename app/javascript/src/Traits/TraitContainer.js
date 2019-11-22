import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Responsive } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NavigationBar from '../Components/NavigationBar';
import TraitTile from './TraitTile';
import loading_gears from '../../../assets/images/miscellaneous_images/loading_gears_white.svg';

class TraitContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChampionClick = this.handleChampionClick.bind(this);
  }

  componentDidMount() {
    document.body.classList.add(`grey-background-color`);
  }

  componentWillUnmount() {
    document.body.classList.remove(`grey-background-color`);
  }

  handleChampionClick(event, key) {
    browserHistory.push(`/champions/${key}`);
  }

  render() {
    let filterOrigins = this.props.traits.filter(trait => { return trait.trait_type === 'Origin'; });
    let filterClasses = this.props.traits.filter(trait => { return trait.trait_type === 'Class'; });

    let origins = filterOrigins.map(trait => {
      return (
        <TraitTile
          key={trait.id}
          id={trait.id}
          traitKey={trait.key}
          seasonId={trait.season.id}
          name={trait.name}
          description={trait.description}
          upgrades={trait.upgrades}
          champions={trait.champions}
          handleChampionClick={this.handleChampionClick}
        />
      )
    });

    let classes = filterClasses.map(trait => {
      return (
        <TraitTile
          key={trait.id}
          id={trait.id}
          traitKey={trait.key}
          seasonId={trait.season.id}
          name={trait.name}
          description={trait.description}
          upgrades={trait.upgrades}
          champions={trait.champions}
          handleChampionClick={this.handleChampionClick}
        />
      )
    });

    let allTraits = origins.concat(classes);

    return (
      <div>
        <NavigationBar />

        <Responsive maxWidth={1023}>
          <div id='ChampionTraitsMobile-page-container'>
            <div id='ChampionTraitsMobile-traits-container'>
              {this.props.isFetching ? (
                <div id='ChampionTraitsMobile-loading-gears-container'>
                  <img className='ChampionTraitsMobile-loading-gears' src={loading_gears} />
                </div>
              ) : (
                allTraits
              )}
            </div>
          </div>
        </Responsive>

        <Responsive minWidth={1024}>
          <div id='ChampionTraitsDesktop-page-container'>
            <div id='ChampionTraitsDesktop-origins-container'>
              <div id='ChampionTraitsDesktop-origins-header'>Origins</div>
              {this.props.isFetching ? (
                <div id='ChampionTraitsDesktop-loading-gears-container'>
                  <img className='ChampionTraitsDesktop-loading-gears' src={loading_gears} />
                </div>
              ) : (
                origins
              )}
            </div>
            <div id='ChampionTraitsDesktop-classes-container'>
              <div id='ChampionTraitsDesktop-classes-header'>Classes</div>
              {this.props.isFetching ? (
                <div id='ChampionTraitsDesktop-loading-gears-container'>
                  <img className='ChampionTraitsDesktop-loading-gears' src={loading_gears} />
                </div>
              ) : (
                classes
              )}
            </div>
          </div>
        </Responsive>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    traits: state.traitContainer.traits,
    isFetching: state.data.isFetching
  }
}

export default connect(
  mapStateToProps,
  null
)(TraitContainer)
