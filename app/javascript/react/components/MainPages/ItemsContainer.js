import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        <NavigationBar page='items' />

        <Message warning icon='wrench' header='This Page (Items) is Still Under Development' content='We are sorry for the inconvenience' />
      </div>
    )
  }
}

export default ItemsContainer;