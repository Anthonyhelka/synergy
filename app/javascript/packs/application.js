import React from 'react';
import { render } from 'react-dom';

import App from '../react/App';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')
  render(<App />, reactElement)
})
