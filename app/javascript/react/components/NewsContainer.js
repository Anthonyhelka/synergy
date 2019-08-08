import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown, Message, Responsive, Image } from 'semantic-ui-react';

import NavigationBar from './NavigationBar';

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <NavigationBar page='news' />

        <Message warning icon='wrench' header='This Page (News) is Still Under Development' content='We are sorry for the inconvenience' />
      </div>
    )
  }
}

export default NewsContainer;
