import React from 'react';
import ReactDOM from 'react-dom';
import { Responsive, Segment, Search, Button, Icon, Image, List, Dropdown } from 'semantic-ui-react';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import HomeContainer from '../../app/javascript/react/components/HomeContainer';

test('rendered component', () => {
  const wrapper = mount(<HomeContainer />);
});
