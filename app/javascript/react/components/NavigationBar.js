import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Card, Image, Grid, Search, Table, Segment, Button, Icon, Responsive } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      home: false,
      champions: false,
      overview: false,
      origins: false,
      classes: false,
      items: false,
      news: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    switch(this.props.page) {
      case 'home':
        this.setState({ home: true })
        break;
      case 'overview':
        this.setState({ champions: true, overview: true })
        break;
      case 'origins':
        this.setState({ champions: true, origins: true })
        break;
      case 'classes':
        this.setState({ champions: true, classes: true })
        break;
      case 'items':
        this.setState({ items: true })
        break;
      case 'news':
        this.setState({ news: true })
        break;
      default:
        break;
    }
  }

  handleClick(event, page) {
    switch(page) {
      case 'home':
        browserHistory.push('/');
        break;
      case 'overview':
        browserHistory.push('/champions/overview');
        break;
      case 'origins':
        browserHistory.push('/champions/origins');
        break;
      case 'classes':
        browserHistory.push('/champions/classes');
        break;
      case 'items':
        browserHistory.push('/items');
        break;
      case 'news':
        browserHistory.push('/news');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Responsive as={Menu} inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item text={<Image src={require('../../../../public/favicon.ico')} />}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' onClick={event => this.handleClick(event, 'home')} active={this.state.home} />
              <Dropdown.Item text='Champions' onClick={event => this.handleClick(event, 'overview')} active={this.state.overview} />
              <Dropdown.Item text='Origins' onClick={event => this.handleClick(event, 'origins')} active={this.state.origins} />
              <Dropdown.Item text='Classes' onClick={event => this.handleClick(event, 'classes')} active={this.state.classes} />
              <Dropdown.Item text='Items' onClick={event => this.handleClick(event, 'items')} active={this.state.items} />
              <Dropdown.Item text='News' onClick={event => this.handleClick(event, 'news')} active={this.state.news} />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' onClick={event => this.handleClick(event, 'home')} active={this.state.home}>
            <Image src={require('../../../../public/favicon.ico')} size='mini' />
          </Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions' active={this.state.champions}>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' onClick={event => this.handleClick(event, 'overview')} active={this.state.overview} />
              <Dropdown.Item text='Origin Synergies' onClick={event => this.handleClick(event, 'origins')} active={this.state.origins} />
              <Dropdown.Item text='Class Synergies' onClick={event => this.handleClick(event, 'classes')} active={this.state.classes} />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' onClick={event => this.handleClick(event, 'items')} active={this.state.items}>
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' onClick={event => this.handleClick(event, 'news')} active={this.state.news}>
            <p>News</p>
          </Menu.Item>
        </Responsive>
      </div>
    )
  }
}

export default NavigationBar;
