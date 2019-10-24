import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment } from 'semantic-ui-react';

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
      news: false,
    }
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

  render() {
    return (
      <div>
        <Responsive as={Menu} id='navigation-bar' inverted fluid stackable widths='1' maxWidth={500}>
          <Dropdown item trigger={<Image id='navigation-bar-logo' src={require('../../../../../public/favicon.ico')}/>}>
            <Dropdown.Menu>
              <Dropdown.Item text='Home' as={ Link } to='/' active={this.state.home} />
              <Dropdown.Item text='Champions' as={ Link } to='/champions/overview' active={this.state.overview} />
              <Dropdown.Item text='Origins' as={ Link } to='/champions/origins' active={this.state.origins} />
              <Dropdown.Item text='Classes' as={ Link } to='/champions/classes' active={this.state.classes} />
              <Dropdown.Item text='Items' as={ Link } to='/items' active={this.state.items} />
              <Dropdown.Item text='News' as={ Link } to='/news' active={this.state.news}  id='navigation-bar-item-mobile-last'/>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>

        <Responsive as={Menu} id='navigation-bar' inverted fluid widths='4' size='small' minWidth={501}>
          <Menu.Item name='home' as={ Link } to='/' active={this.state.home}><Image id='navigation-bar-logo' src={require('../../../../../public/favicon.ico')}/></Menu.Item>
          <Dropdown as={Menu.Item} item text='Champions' active={this.state.champions}>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' active={this.state.overview} />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' active={this.state.origins} />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' active={this.state.classes} />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items' active={this.state.items}><p>Items</p></Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news' active={this.state.news}><p>News</p></Menu.Item>
        </Responsive>
      </div>
    )
  }
}

export default NavigationBar;
