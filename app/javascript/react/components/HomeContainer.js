import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Segment, Search, Button, Icon, Image } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      background: '',
      query: '',
      filteredData: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
  }

  componentWillMount() {
    let backgroundImages = ['aatrox', 'braum', 'elise', 'fiora', 'gnar', 'jinx', 'khazix', 'kindred', 'lissandra', 'lucian', 'poppy', 'shyvana', 'tristana', 'twistedfate', 'volibear']
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

  getData() {
    fetch(`/api/v1/champions/overview`)
      .then(response => response.json())
      .then(response => {
        let query = this.state.query;
        let data = response.champions;
        let filteredData = data.filter(champion => {
          return champion.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
          filteredData: filteredData
        })
      });
  };

  handleSearch(event){
    if(event.keyCode == 13){
      browserHistory.push(`/summoners/${event.target.value}`);
      window.location.reload();
    } else {
      this.handleSearchChange(event);
    }
  }

  handleSearchChange(event){
    this.setState({ query: event.target.value })
    this.getData();
  }

  handleResultSelect(event, name){
    browserHistory.push(`/champions/${name}`);
  }

  render() {

    let results = this.state.filteredData.map(champion => ({
          title: champion.name,
          image: champion.icon
        }));

    const resultRenderer = ({ title, image, id }) => {
      const pathToIcon = require.context('../../../../public/icons', true);
      return [
        <Responsive key={1} as={Segment} fluid basic='very' textAlign='left' maxWidth={500}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-mobile' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>,
        <Responsive key={2} as={Segment} fluid basic='very' textAlign='left' minWidth={501} maxWidth={1249}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-tablet-computer' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>,
        <Responsive key={3} as={Segment} fluid basic='very' textAlign='left' minWidth={1250}  onClick={event => this.handleResultSelect(event, title)}>
          <img id='search-image-large-computer' key={id} src={`${pathToIcon(image , true)}`} />
          <span id='search-title'>&nbsp;&nbsp;{title}</span>
        </Responsive>
      ];
    };

    return (
      <div>
        <NavigationBar page='home' />

        <Responsive as={Image} id='home-logo-mobile-tablet' src={require('../../../../public/logo/transparentLogoBlack.png')} centered size='medium' maxWidth={800} />
        <Responsive as={Image} id='home-logo-computer' src={require('../../../../public/logo/transparentLogoWhite.png')} centered size='medium' minWidth={801} />

        <Segment id='search-segment' textAlign='center' basic>
          <Search id='search-bar' placeholder='Search for champion/summoner' value={this.state.query} results={results} resultRenderer={resultRenderer} onSearchChange={this.handleSearch} onKeyDown={this.handleSearch} showNoResults={false} />
        </Segment>

        <Segment id='button-segment' textAlign='center' basic={true}>
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
