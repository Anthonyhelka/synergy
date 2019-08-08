import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';

class SummonerContainer extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Message warning icon='wrench' header='This Page (Summoners) is Still Under Development' content='We are sorry for the inconvenience' />
      </div>
    )
  }
}

export default SummonerContainer;
