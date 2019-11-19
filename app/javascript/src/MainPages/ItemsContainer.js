import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Message } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div id='ItemsContainer-page-container'>
          <Message warning icon='wrench' header='This Page (Items) is Still Under Development' content='We are sorry for the inconvenience' />
        </div>
      </div>
    )
  }
}

export default ItemsContainer;
