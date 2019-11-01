import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Responsive, Menu, Dropdown, Image, Segment, Sidebar, Icon, Header, Input } from 'semantic-ui-react';

import SummonerSearch from '../Components/SummonerSearch';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      home: 'inactive',
      overview: 'inactive',
      origins: 'inactive',
      classes: 'inactive',
      items: 'inactive',
      news: 'inactive',
      sidebarStatus: 'invisible',
      sidebarVisible: false
    }
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleSidebar(event) {
    (this.state.sidebarStatus === 'invisible') ? this.setState({ sidebarStatus: 'visible', sidebarVisible: true }) : this.setState({ sidebarStatus: 'invisible', sidebarVisible: false });
  }

  handleLogoClick(event) {
    browserHistory.push(`/`);
    window.location.reload();
  }

  componentWillMount() {
    document.addEventListener('click', this.handleNonSidebarClick, false);
    switch(this.props.page) {
      case 'home':
        this.setState({ home: 'active' })
        break;
      case 'overview':
        this.setState({ overview: 'active' })
        break;
      case 'origins':
        this.setState({ origins: 'active' })
        break;
      case 'classes':
        this.setState({ classes: 'active' })
        break;
      case 'items':
        this.setState({ items: 'active' })
        break;
      case 'news':
        this.setState({ news: 'active' })
        break;
      default:
        break;
    }
  }

  render() {
    return [
      <Responsive key='mobile/tablet' maxWidth={1023}>
        <Menu id='NavigationBarMobile-container'>
          <Menu.Item id='NavigationBarMobile-item-one-container'>
            <div id={`NavigationBarMobile-item-one-sidebar-button-${this.state.sidebarStatus}`} onClick={this.handleSidebar} animation='overlay'>
              <Icon id='NavigationBarMobile-item-one-icon' name='bars' />
            </div>
          </Menu.Item>
          <Menu.Item id='NavigationBarMobile-item-two-container'>
            <Image id='NavigationBarMobile-item-two-image' src={require('../../../assets/images/logos/logo.png')} onClick={this.handleLogoClick} />
          </Menu.Item>
          <Menu.Item id='NavigationBarMobile-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarMobile-sidebar-container' as={Menu} vertical visible={this.state.sidebarVisible}>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.home}`} as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.overview}`} as={Link} to='/champions/overview'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.origins}`} as={Link} to='/champions/origins'><Icon name='group' />Origins</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.classes}`} as={Link} to='/champions/classes'><Icon name='group' />Classes</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.items}`} as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.news}`} as={Link} to='/news'><Icon name='newspaper' />News</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-close`} onClick={this.handleSidebar}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
      </Responsive>,

      <Responsive key='desktop' minWidth={1024}>
        <Menu id='NavigationBarDesktop-container'>
          <Menu.Item id='NavigationBarDesktop-item-one-container'>
            <div id={`NavigationBarDesktop-item-one-sidebar-button-${this.state.sidebarStatus}`} onClick={this.handleSidebar} animation='overlay'>
              <Icon id='NavigationBarDesktop-item-one-icon' name='bars' />
            </div>
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-two-container'>
            <Image id='NavigationBarDesktop-item-two-image' src={require('../../../assets/images/logos/logo.png')} onClick={this.handleLogoClick} />
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarDesktop-sidebar-container' as={Menu} vertical visible={this.state.sidebarVisible}>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.home}`} as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.overview}`} as={Link} to='/champions/overview'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.origins}`} as={Link} to='/champions/origins'><Icon name='group' />Origins</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.classes}`} as={Link} to='/champions/classes'><Icon name='group' />Classes</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.items}`} as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.news}`} as={Link} to='/news'><Icon name='newspaper' />News</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-close`} onClick={this.handleSidebar}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
      </Responsive>
    ]
  }
}

export default NavigationBar;
