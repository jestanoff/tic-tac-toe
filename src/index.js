import React from 'react';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App/index';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

const container = document.getElementById('app-container');

render(<App />, container);
