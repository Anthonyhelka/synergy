import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import NavigationBar from '../Components/NavigationBar';

class NewsContainer extends Component {
  render() {
    return (
      <div>
        <NavigationBar page='news' />
        <div id='NewsContainer-page-container'>
          <Message warning icon='wrench' header='This Page (News) is Still Under Development' content='We are sorry for the inconvenience' />
        </div>
      </div>
    )
  }
}

export default NewsContainer;
