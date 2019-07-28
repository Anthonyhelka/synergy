import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Card, Image, Grid, Search, Table, Segment, Button, Icon, Responsive } from 'semantic-ui-react';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      query: '',
      filteredData: []
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.getData = this.getData.bind(this);
    this.onResultSelect = this.onResultSelect.bind(this);

  }

  onSearchChange(event){
    this.setState({ query: event.target.value })
    this.getData();
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

  onResultSelect(event, name){
    browserHistory.push(`/champions/${name}`);
  }

  render() {

    let results = this.state.filteredData.map(champion => ({
      title: champion.name,
      image: champion.icon
    }));

    const resultRenderer = ({ title, image, id }) => {
      const pathToIcon = require.context('../../../../public/icons', true);
      return (
        <Table columns='2' basic='very' compact='very' size='small' singleLine={true} onClick={event => this.onResultSelect(event, title )}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Image id='search-image' key={id} src={`${pathToIcon(image , true)}`} size='mini' />
              </Table.Cell>
              <Table.Cell>
                <span id='search-title'>{title}</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    };

    return (
      <div>
        <Responsive as={Menu} inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={ Link } to='/' active />
              <Dropdown.Item text='Champions' as={ Link } to='/champions' />
              <Dropdown.Item text='Origins' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Classes' as={ Link } to='/champions/classes' />
              <Dropdown.Item text='Items' as={ Link } to='/items' />
              <Dropdown.Item text='News' as={ Link } to='/news' />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/' active>
            <Image src={require('../../../../public/favicon.ico')} size='mini' />
          </Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items'>
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news'>
            <p>News</p>
          </Menu.Item>
        </Responsive>

        <Responsive as={Image} id='home-logo-mobile-tablet' centered src={require('../../../../public/logo/transparentLogo2.png')} size='medium' maxWidth={800} />
        <Responsive as={Image} id='home-logo-computer' centered src={require('../../../../public/logo/transparentLogo2.png')} size='medium' minWidth={801} />

        <Segment id='search-segment' textAlign='center' basic={true}>
          <Search placeholder='Search for champion...' fluid={true} results={results} resultRenderer={resultRenderer} value={this.state.query} onSearchChange={this.onSearchChange} />
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
