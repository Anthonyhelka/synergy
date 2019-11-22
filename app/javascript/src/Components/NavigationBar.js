import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { handleSeasonChange } from '../Redux/modules/data';
import { handleCurrentPage, handleSidebarClick, handleSidebarOutsideClick } from '../Redux/modules/navigationBar';
import { Responsive, Menu, Dropdown, Image, Segment, Sidebar, Icon, Header, Input } from 'semantic-ui-react';
import SummonerSearch from '../Components/SummonerSearch';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleSidebarOutsideClick = this.handleSidebarOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleSidebarOutsideClick);
    this.props.handleCurrentPage();
  }

  handleLogoClick() {
    browserHistory.push('/');
  }

  handleSidebarOutsideClick(event) {
    this.props.handleSidebarOutsideClick(event.target.className);
  }

  render() {
    return [
      <Responsive key='mobile/tablet' maxWidth={1023}>
        <Menu id='NavigationBarMobile-container'>
          <Menu.Item id={`NavigationBarMobile-item-one-container-${this.props.sidebarStatus}`} className='NavigationBar-sidebar'>
            <div id={`NavigationBarMobile-item-one-sidebar-button-${this.props.sidebarStatus}`} className='NavigationBar-sidebar' onClick={this.props.handleSidebarClick} animation='overlay'>
              <Icon id='NavigationBarMobile-item-one-icon' className='NavigationBar-sidebar' name='bars' />
            </div>
          </Menu.Item>
          {this.props.sidebarVisible === false ? (<Menu.Item id='NavigationBarMobile-item-two-container'><Image id='NavigationBarMobile-item-two-image' onClick={this.handleLogoClick} src={require('../../../assets/images/logos/logo.png')} alt='Synergy Logo' /></Menu.Item>) : (<span></span>)}
          <Menu.Item id='NavigationBarMobile-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarMobile-sidebar-container' className='NavigationBar-sidebar' as={Menu} animation='overlay' vertical visible={this.props.sidebarVisible}>
          {this.props.season === 1 ? (
            <div id='NavigationBarDesktop-change-season-container' className='NavigationBar-sidebar'>
              <div className='NavigationBarDesktop-change-season-item-active NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
              <div className='NavigationBarDesktop-change-season-item-inactive NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
            </div>
          ) : (
            <div id='NavigationBarDesktop-change-season-container' className='NavigationBar-sidebar'>
              <div className='NavigationBarDesktop-change-season-item-inactive NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
              <div className='NavigationBarDesktop-change-season-item-active NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
            </div>
          )}
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.props.home}`} as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.props.table}`} as={Link} to='/champions'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.props.traits}`} as={Link} to='/champions/traits'><Icon name='group' />Traits</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-${this.props.items}`} as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarMobile-sidebar-item-container-close`} onClick={this.props.handleSidebar}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
      </Responsive>,

      <Responsive key='desktop' minWidth={1024}>
        <Menu id='NavigationBarDesktop-container'>
          <Menu.Item id='NavigationBarDesktop-item-one-container' className='NavigationBar-sidebar'>
            <div id={`NavigationBarDesktop-item-one-sidebar-button-${this.props.sidebarStatus}`} className='NavigationBar-sidebar' onClick={this.props.handleSidebarClick}>
              <Icon id='NavigationBarDesktop-item-one-icon' className='NavigationBar-sidebar' name='bars'/>
            </div>
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-two-container'>
            <Image id='NavigationBarDesktop-item-two-image' onClick={this.handleLogoClick} src={require('../../../assets/images/logos/logo.png')} alt='Synegy Logo'  />
          </Menu.Item>
          <Menu.Item id='NavigationBarDesktop-item-three-container'>
            <SummonerSearch />
          </Menu.Item>
        </Menu>
        <Sidebar id='NavigationBarDesktop-sidebar-container' className='NavigationBar-sidebar' as={Menu} animation='overlay' vertical visible={this.props.sidebarVisible}>
          {this.props.season === 1 ? (
            <div id='NavigationBarDesktop-change-season-container' className='NavigationBar-sidebar'>
              <div className='NavigationBarDesktop-change-season-item-active NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
              <div className='NavigationBarDesktop-change-season-item-inactive NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
            </div>
          ) : (
            <div id='NavigationBarDesktop-change-season-container' className='NavigationBar-sidebar'>
              <div className='NavigationBarDesktop-change-season-item-inactive NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 1)}>Set 1</div>
              <div className='NavigationBarDesktop-change-season-item-active NavigationBar-sidebar' onClick={event => this.props.handleSeasonChange(event, 2)}>Set 2</div>
            </div>
          )}
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.props.home}`} as={Link} to='/'><Icon name='home' />Home</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.props.table}`} as={Link} to='/champions'><Icon name='chess pawn' />Champions</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.props.traits}`} as={Link} to='/champions/traits'><Icon name='group' />Traits</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-${this.props.items}`} as={Link} to='/items'><Icon name='shield alternate' />Items</Menu.Item>
          <Menu.Item id={`NavigationBarDesktop-sidebar-item-container-close`} onClick={this.props.handleSidebarClick}><Icon name='close' />Close</Menu.Item>
        </Sidebar>
      </Responsive>
    ]
  }
}

const mapStateToProps = (state) => {
  return {
    season: state.data.season,
    home: state.navigationBar.home,
    table: state.navigationBar.table,
    traits: state.navigationBar.traits,
    items: state.navigationBar.items,
    sidebarStatus: state.navigationBar.sidebarStatus,
    sidebarVisible: state.navigationBar.sidebarVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSeasonChange: (event, desiredSeason) => dispatch(handleSeasonChange(event, desiredSeason)),
    handleCurrentPage: () => dispatch(handleCurrentPage()),
    handleSidebarClick: () => dispatch(handleSidebarClick()),
    handleSidebarOutsideClick: (eventClass) => dispatch(handleSidebarOutsideClick(eventClass))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
