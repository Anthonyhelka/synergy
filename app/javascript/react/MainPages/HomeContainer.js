import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Segment, Search, Button, Icon, Image, List, Dropdown } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';
import SearchBar from '../Components/SearchBar';

import '../../../assets/stylesheets/HomeContainer.scss';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      background: ''
    }
  }

  componentWillMount() {
    let backgroundImages = ['jinx', 'lissandra', 'poppy', 'tristana']
    let randomImage = backgroundImages[Math.floor(Math.random()*backgroundImages.length)];
    this.setState({ background: randomImage })
  }

  componentDidMount() {
    if (window.innerWidth >= 1024) {
      document.body.classList.add(`black-background-color`);
      document.body.classList.add(`background-${this.state.background}`);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth >= 1024) {
      document.body.classList.remove(`black-background-color`);
      document.body.classList.remove(`background-${this.state.background}`);
    }
  }

  render() {
    return (
      <div>
        <NavigationBar page='home' />

        <Responsive as={Image} id='logo-mobile-tablet' src={require('../../../assets/images/logos/transparentLogoBlack.png')} centered size='medium' maxWidth={800} />
        <Responsive as={Image} id='logo-computer' src={require('../../../assets/images/logos/transparentLogoWhite.png')} centered size='medium' minWidth={801} />

        <SearchBar />

        <Segment id='home-page-button-group-container' textAlign='center' basic>
          <Button.Group>
            <Button animated as={ Link } to={'/champions'}>
              <Button.Content visible>Champions</Button.Content>
              <Button.Content hidden>
                <Icon name='chess pawn' />
              </Button.Content>
            </Button>
            <Button animated as={ Link } to={'/items'}>
              <Button.Content visible>Items</Button.Content>
              <Button.Content hidden>
                <Icon name='shield alternate' />
              </Button.Content>
            </Button>
            <Button animated as={ Link } to={'/news'}>
              <Button.Content visible>News</Button.Content>
              <Button.Content hidden>
                <Icon name='newspaper' />
              </Button.Content>
            </Button>
          </Button.Group>
        </Segment>
      </div>
    )
  }
}

export default HomeContainer;
