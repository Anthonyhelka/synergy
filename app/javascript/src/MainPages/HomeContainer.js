import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Segment, Search, Button, Icon, Image, List, Dropdown } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import SummonerSearch from '../Components/SummonerSearch';
import ChampionSearchContainer from '../ChampionSearch/ChampionSearchContainer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      background: ''
    }
  }

  componentWillMount() {
    let backgroundImages = ['nasus', 'taliyah'];
    let randomImage = backgroundImages[Math.floor(Math.random()*backgroundImages.length)];
    this.setState({ background: randomImage })
  }

  componentDidMount() {
    if (window.innerWidth >= 501) {
      document.body.classList.add(`black-background-color`);
      document.body.classList.add(`background-${this.state.background}`);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth >= 501) {
      document.body.classList.remove(`black-background-color`);
      document.body.classList.remove(`background-${this.state.background}`);
    }
  }

  render() {
    return (
      <div>
        <NavigationBar page='home' />

        <Responsive maxWidth={500}>
          <div id='HomeContainerMobile-page-container'>
            <Segment id='HomeContainerMobile-logo-container' basic>
              <Image id='HomeContainerMobile-logo' src={require('../../../assets/images/logos/logoBlack.png')} />
            </Segment>
            <Segment id='HomeContainerMobile-search-container' basic>
              <Segment id='HomeContainerMobile-summoner-search-container' basic>
                <SummonerSearch />
              </Segment>
              <Segment id='HomeContainerMobile-button-group-container' basic>
                <Button.Group id='HomeContainerMobile-button-group'>
                  <Button id='HomeContainerMobile-button-group-button' animated as={ Link } to={'/champions'}>
                    <Button.Content visible>Champions</Button.Content>
                    <Button.Content hidden>
                      <Icon name='chess pawn' />
                    </Button.Content>
                  </Button>
                  <Button id='HomeContainerMobile-button-group-button' animated as={ Link } to={'/items'}>
                    <Button.Content visible>Items</Button.Content>
                    <Button.Content hidden>
                      <Icon name='shield alternate' />
                    </Button.Content>
                  </Button>
                  <Button id='HomeContainerMobile-button-group-button' animated as={ Link } to={'/news'}>
                    <Button.Content visible>News</Button.Content>
                    <Button.Content hidden>
                      <Icon name='newspaper' />
                    </Button.Content>
                  </Button>
                </Button.Group>
              </Segment>
              <Segment id='HomeContainerMobile-champion-search-container' basic>
                <ChampionSearchContainer />
              </Segment>
            </Segment>
          </div>
        </Responsive>

        <Responsive minWidth={501}>
          <div id='HomeContainerDesktop-page-container'>
            <Segment id='HomeContainerDesktop-logo-container' basic>
              <Image id='HomeContainerDesktop-logo' src={require('../../../assets/images/logos/logoWhite.png')} />
            </Segment>
            <Segment id='HomeContainerDesktop-search-container' basic>
              <Segment id='HomeContainerDesktop-summoner-search-container' basic>
                <SummonerSearch />
              </Segment>
              <Segment id='HomeContainerDesktop-button-group-container' basic>
                <Button.Group id='HomeContainerDesktop-button-group'>
                  <Button id='HomeContainerDesktop-button-group-button' animated as={ Link } to={'/champions'}>
                    <Button.Content visible>Champions</Button.Content>
                    <Button.Content hidden>
                      <Icon name='chess pawn' />
                    </Button.Content>
                  </Button>
                  <Button id='HomeContainerDesktop-button-group-button' animated as={ Link } to={'/champions/origins'}>
                    <Button.Content visible>Synergies</Button.Content>
                    <Button.Content hidden>
                      <Icon name='group' />
                    </Button.Content>
                  </Button>
                  <Button id='HomeContainerDesktop-button-group-button' animated as={ Link } to={'/items'}>
                    <Button.Content visible>Items</Button.Content>
                    <Button.Content hidden>
                      <Icon name='shield alternate' />
                    </Button.Content>
                  </Button>
                  <Button id='HomeContainerDesktop-button-group-button' animated as={ Link } to={'/news'}>
                    <Button.Content visible>News</Button.Content>
                    <Button.Content hidden>
                      <Icon name='newspaper' />
                    </Button.Content>
                  </Button>
                </Button.Group>
              </Segment>
              <Segment id='HomeContainerDesktop-champion-search-container' basic>
                <ChampionSearchContainer />
              </Segment>
            </Segment>
          </div>
        </Responsive>
      </div>
    )
  }
}

export default HomeContainer;
