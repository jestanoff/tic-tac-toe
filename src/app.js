import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TicTacToeApp from './js/TicTacToeApp';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const container = document.getElementById('app-container');
const App = () => (
    <MuiThemeProvider>
        <TicTacToeApp />
    </MuiThemeProvider>
);

render(
    <App />,
    container,
);
