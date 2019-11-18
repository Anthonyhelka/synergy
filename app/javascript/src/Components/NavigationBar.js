import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

import { connect } from 'react-redux';
import { handleSeasonChange } from '../Redux/modules/champions';

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
    this.handleClickOutsideSidebar = this.handleClickOutsideSidebar.bind(this);
  }

  handleClickOutsideSidebar(event) {
    if (!event.target.className.includes('NavigationBarMobile-sidebar')) { this.setState({ sidebarStatus: 'invisible', sidebarVisible: false }); }
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

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideSidebar);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleClickOutsideSidebar);
  }

  render() {
    return [
      <Responsive key='mobile/tablet' maxWidth={1023}>
        <Menu id='NavigationBarMobile-container'>
          <Menu.Item id={`NavigationBarDesktop-item-one-container-${this.state.sidebarStatus}`} className='NavigationBarMobile-sidebar'>
            <div id={`NavigationBarMobile-item-one-sidebar-button-${this.state.sidebarStatus}`} className='NavigationBarMobile-sidebar' onClick={this.handleSidebar} animation='overlay'>
              <Icon id='NavigationBarMobile-item-one-icon' className='NavigationBarMobile-sidebar' name='bars' />
            </div>
          </Menu.Item>
          {this.state.sidebarVisible === false ? (<Menu.Item id='NavigationBarMobile-item-two-container'><Image id='NavigationBarMobile-item-two-image' src={require('../../../assets/images/logos/logo.png')} onClick={this.handleLogoClick} /></Menu.Item>) : (<span></span>)}
          <Menu.Item id='NavigationBarMobile-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarMobile-sidebar-container' className='NavigationBarMobile-sidebar' as={Menu} animation='overlay' vertical visible={this.state.sidebarVisible}>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.home}`} className='NavigationBarMobile-sidebar' as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.overview}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/overview'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.origins}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/origins'><Icon name='group' />Origins</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.classes}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/classes'><Icon name='group' />Classes</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.items}`} className='NavigationBarMobile-sidebar' as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.state.news}`} className='NavigationBarMobile-sidebar' as={Link} to='/news'><Icon name='newspaper' />News</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-close`} className='NavigationBarMobile-sidebar' onClick={this.handleSidebar}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
      </Responsive>,

      <Responsive key='desktop' minWidth={1024}>
        <Menu id='NavigationBarDesktop-container'>
          <Menu.Item id='NavigationBarDesktop-item-one-container' className='NavigationBarMobile-sidebar'>
            <div id={`NavigationBarDesktop-item-one-sidebar-button-${this.state.sidebarStatus}`} className='NavigationBarMobile-sidebar' onClick={this.handleSidebar} animation='overlay'>
              <Icon id='NavigationBarDesktop-item-one-icon' className='NavigationBarMobile-sidebar' name='bars' />
            </div>
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-two-container'>
            <Image id='NavigationBarDesktop-item-two-image' src={require('../../../assets/images/logos/logo.png')} onClick={this.handleLogoClick} />
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarDesktop-sidebar-container' className='NavigationBarMobile-sidebar' as={Menu} animation='overlay' vertical visible={this.state.sidebarVisible}>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.home}`} className='NavigationBarMobile-sidebar' as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.overview}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/overview'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.origins}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/origins'><Icon name='group' />Origins</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.classes}`} className='NavigationBarMobile-sidebar' as={Link} to='/champions/classes'><Icon name='group' />Classes</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.items}`} className='NavigationBarMobile-sidebar' as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.state.news}`} className='NavigationBarMobile-sidebar' as={Link} to='/news'><Icon name='newspaper' />News</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-close`} className='NavigationBarMobile-sidebar' onClick={this.handleSidebar}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
        {this.props.season === 1 ? (
          <div id='NavigationBarDesktop-change-season-container'>
            <div id='NavigationBarDesktop-change-season-item-left' className='NavigationBarDesktop-change-season-item-active' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
            <div className='NavigationBarDesktop-change-season-item-inactive' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
          </div>
        ) : (
          <div id='NavigationBarDesktop-change-season-container'>
            <div id='NavigationBarDesktop-change-season-item-left' className='NavigationBarDesktop-change-season-item-inactive' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
            <div className='NavigationBarDesktop-change-season-item-active' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
          </div>
        )}
      </Responsive>
    ]
  }
}

const mapStateToProps = (state) => {
  return {
    season: state.champions.season
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSeasonChange: (event, desiredSeason) => dispatch(handleSeasonChange(event, desiredSeason))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
